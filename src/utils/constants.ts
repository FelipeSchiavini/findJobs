
interface zippiaBodyRequest {
    companySkills :boolean;
    dismissedListingHashes: Array<any>;
    fetchJobDesc: boolean;
    jobTitle: string;
    locations: Array<any>;
    numJobs: number;
    previousListingHashes : Array<any>;
}

export const zippiaUrl: string = 'https://www.zippia.com/api/jobs/'

export const headers: Record<string,string> = {
    'Content-Type': 'application/json',
}

export const zippiaBodyRequest: zippiaBodyRequest = {
        "companySkills": true,
        "dismissedListingHashes": [],
        "fetchJobDesc": true,
        "jobTitle": "Business Analyst",
        "locations": [],
        "numJobs": 10,
        "previousListingHashes": []
}

