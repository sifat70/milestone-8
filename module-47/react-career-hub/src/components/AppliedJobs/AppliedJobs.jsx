import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))

            const jobsApplied = [];
            for(const id of storedJobsIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }

            console.log(jobs, storedJobsIds, jobsApplied);
        }
    }, [])
    return (
        <div>
            <h2>Applied Jobs</h2>
        </div>
    );
};

export default AppliedJobs;