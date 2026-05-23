import { useState } from "react";
import type { Job } from "../Mockdata/jobs";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3 className="job-card-title">{job.title}</h3>
        <span className="job-card-company">{job.company}</span>
      </div>
      {showDetails && (
        <div className="job-card-details">
          <div className="job-card-detail-row">
            <span className="job-card-label">Location</span>
            <span className="job-card-value">{job.location}</span>
          </div>
          <div className="job-card-detail-row">
            <span className="job-card-label">Salary</span>
            <span className="job-card-value">{job.salary}</span>
          </div>
          <p className="job-card-description">{job.description}</p>
        </div>
      )}

      <button className="job-card-btn" onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};
