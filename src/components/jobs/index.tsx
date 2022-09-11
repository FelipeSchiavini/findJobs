import axios from 'axios'
import { useEffect, useState } from 'react'
import { headers, zippiaUrl, zippiaBodyRequest } from '../../utils/constants'
import { Col, Container, Row } from 'react-grid-system';
import { Card } from '../card/card';
import React from 'react';
import { Job } from './jobs.model';
import { isNewPostingDate } from '../../utils/dates';
import Select from 'react-select'
import { Button } from '../../styles/custom/button';
import { Selection } from '../../styles/custom/selection';


interface Companies {
    value: string;
    label: string;
}

export const Jobs: React.FunctionComponent = (): JSX.Element => {
    const [data, setData] = useState<Array<Job>>([])
    const [selectedCompany, setSelectedCompany] = useState<Companies[]>([])
    const [allCompanies, setAllCompanies] = useState<Companies[]>([])

    const filterLast7Days = (): void => {
        const jobs: Job[] = data.filter((d) => isNewPostingDate(d.OBJpostingDate))
        setData(jobs)
    };

    useEffect(()=> {
        const fetchData = async () => {
            const data = await axios.post(zippiaUrl, zippiaBodyRequest, headers)
            const jobs: Job[] = data.data.jobs
                        
            const companies = new Set(jobs.filter((j) => j.companyName)) 
            
            const uniqueCompanie: Companies[] = Array.from(companies).map(c => {
                return (
                    {
                        value: c.companyName,
                        label: c.companyName
                    })
            })
            setData(jobs)
            setAllCompanies(uniqueCompanie)
        }
        fetchData()
    }, []);

    useEffect(()=> {
        const fetchData = async () => {
            const data = await axios.post(zippiaUrl, zippiaBodyRequest, headers)
            const jobs: Job[] = data.data.jobs
            if (selectedCompany.length > 0){
                const companies = selectedCompany.map(c => c.value)
                const filteredJobs = jobs.filter(job => companies.includes(job.companyName))
                setData(filteredJobs)
            } else {
                setData(jobs)
            }
        }
        fetchData()
    }, [selectedCompany])
    

    const handleChange = (selectedOption: any) => {
        setSelectedCompany(selectedOption)
    }

    const handleChangeCompanies = () => {
        setSelectedCompany([])
    }

    
    return (
        <Container>
            <Row>
                <Col xs = {12} lg ={6}>
                    <Selection isMulti value={selectedCompany} options={allCompanies} onChange={handleChange} placeholder='Select companies filter'/>
                </Col>
                <Col xs = {6} lg={3}>
                    <Button onClick={filterLast7Days}>LAST 7 DAYS</Button>
                </Col>
                <Col xs = {6} lg={3}>
                    <Button onClick={handleChangeCompanies}>ALL DAYS</Button>

                </Col>
            </Row>

            {
            data.map((job,index) => {
                if( index % 2) { 
                    return null
                }
                return (    
                <Row key={job.jobId}>
                    <Col xs = {12} lg ={6}>
                        <Card job={job}/>
                    </Col>
                    
                    <Col xs = {12} lg={6}>
                        <Card job={data[index+1]}/>
                    </Col>
                </Row>
                )
            })}
            
        </Container>
    )
}