import React, { useEffect, useState } from 'react';
import { H2, H3 } from '../../styles/custom/headers';
import { P, PStrong } from '../../styles/custom/texts';
import { parseDateToShortString } from '../../utils/dates';
import { Job } from '../jobs/jobs.model';
import { CardContainer, CardDate, CardDescription, CardHeader, CardImage, CardImageContainer, CardInfo, CardWrapper } from './card.style';

interface CardProps {
    job: Job;
}


export const Card:React.FunctionComponent<CardProps> = (props) => {
    const [read, setRead] = useState(500)
    const [readText, setReadText ] = useState<string>('Read more...')
    const {job} =  props

    useEffect(()=> {
        setRead(500)
        setReadText('Read more...')
    },[job])

    const readDescription = () => {
        if (read === 500) {
            setRead(10000)
            setReadText('Close...')
        }  else {
            setRead(500)
            setReadText('Read more...')
        }
    }

    return (
    <CardContainer>
        <CardHeader>
        <CardImageContainer>
            <CardImage src={job?.companyLogo ? job.companyLogo : require('../../images/image-not-found.jpg')} alt={'image-not-found'}/>
        </CardImageContainer>
        <CardInfo>
            <H2>{job?.jobTitle.toUpperCase()}</H2>
            <CardWrapper>
                <H3>{job?.companyName}</H3> 
                <CardDate>{parseDateToShortString(new Date(job?.OBJpostingDate))}</CardDate>
            </CardWrapper>
        </CardInfo>
        </CardHeader>
        <CardDescription>
            <P dangerouslySetInnerHTML={{__html: job?.OBJdesc.slice(0, read)}} /> <PStrong onClick={readDescription}>{readText}</PStrong>
        </CardDescription>
    </CardContainer>
    )
}

