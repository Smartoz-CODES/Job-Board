import { JobCard } from "./job-card";
import type { Job } from "../Mockdata/jobs"; // Job (the type), not jobs (the array)

interface JobListProps {
  jobs: Job[];
}

export const JobList = ({ jobs }: JobListProps) => {
  if (jobs.length === 0) {
    return (
      <div className="job-list-empty">
        <p>No jobs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="job-list-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
