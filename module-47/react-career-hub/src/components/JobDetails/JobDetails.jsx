import { useLoaderData, useParams } from "react-router-dom";
import { MdCurrencyExchange, MdCreditCard, MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2 className="text-5xl text-center mt-5 mb-5">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3">
                    <h2><span className="font-bold">Job Description: </span> {job.job_description}</h2>
                    <h2 className="mt-3"><span className="font-bold">Job Responsibility: </span> {job.job_responsibility}</h2>
                    <h2 className="mt-3"><span className="font-bold">Educational Requirements: <br /></span> {job.educational_requirements}</h2>
                    <h2 className="mt-3"><span className="font-bold">Experience: <br /></span> {job.experiences}</h2>
                </div>
                <div className=" bg-slate-100">
                    <h2 className="text-xl font-bold mt-3 mb-3">Job Details</h2>
                    <hr />
                    <h2 className="flex items-center mt-3"><MdCurrencyExchange className="mr-3"></MdCurrencyExchange>Salary: {job.salary}</h2>
                    <h2 className="flex items-center mt-3"><MdCreditCard className="mr-3"></MdCreditCard>Job Title: {job.job_title}</h2>
                    <h2 className="text-xl font-bold mt-3 mb-3">Contact Information</h2>
                    <hr />
                    <h2 className="flex items-center mt-3"><MdPhone className="mr-3"></MdPhone>Phone: {job.contact_information.phone}</h2>
                    <h2 className="flex items-center mt-3"><MdEmail className="mr-3"></MdEmail>Email: {job.contact_information.email}</h2>
                    <h2 className="flex items-center mt-3"><MdLocationOn className="mr-3"></MdLocationOn>Location: {job.contact_information.address}</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-3">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;