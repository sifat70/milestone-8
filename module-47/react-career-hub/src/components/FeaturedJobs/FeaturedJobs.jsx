import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [job, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <div className="text-center">
                    <h2 className="text-5xl">Featured Jobs: {job.length}</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {
                        job.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className="flex justify-center mt-6 mb-6">
                    <div className={dataLength === job.length && 'hidden'}>
                        <button

                            onClick={() => setDataLength(job.length)}
                            className="btn btn-primary">Show All Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;