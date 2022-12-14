export interface Job {
    OBJcity: string;
    OBJcompanyDisplay: string;
    OBJcompanyID: number;
    OBJcountry: string;
    OBJtitle: string;
    OBJdesc: string;
    OBJindustry: string;
    OBJjobTags: Array<string>;
    OBJpostingDate:string;
    OBJstate: string;
    OBJstateCode: string;
    OBJtitleDisplay: string;
    OBJurl: string;
    OBJzipcode: string;
    actionDateSince: string;
    benefits: Array<string>;
    bestCompaniesPageURLAtJobLocation:string;
    careerMainPageURL: string;
    companyID: number;
    companyInitial: string;
    companyLogo: string;
    companyName:string;
    companyZippiaOverallScore: number;
    contactEmails: Array<string>;
    contactEmailsFlag: boolean;
    cpc: number;
    easyApplyFlag: false
    estimatedSalary: string;
    formattedOriginalCompanyName: string;
    iconClass: string;
    iconSVG: string;
    isSpammyCompany: false
    jobDescription: string;
    jobId:  string;
    jobLevels:Array<string>;
    jobMajor: false
    jobTags: Array<string>;
    jobTitle: string;
    jobURL: string;
    listingHash: string;
    location: string;
    nearbyTo0: Array<string>;
    originalCPC: string;
    partnerName: string;
    postedDate: string;
    postingDate: string;
    preferredDegrees: [];
    requiredDegree:  string;
    salary: Record<string,number>;
    salaryPeriod: string;
    showNewJobBedge: true;
    skillsets: Array<string>;
    snippets: Array<string>;
    socCodeName: false;
    socode:  string;
    source: string;
    sponsorFlag: boolean;
    sponsoredDlp: boolean;
    templateName: string;
    titleID: string;
    unifiedZippiaSalary: number;
    url: string;
}