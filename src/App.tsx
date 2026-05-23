import { JobList } from "./Components/job-list";
import { jobs } from "./Mockdata/jobs";

// COMP0NENT : FUNCTION THAT RETURNS HTML
const App = () => {
  return (
    <main className="Workapp">
      <header className="Workapp-header">
        <h1>Job Board</h1>
        <p>Find your next employment opportunity</p>
      </header>
      <section className="Workapp-list">
        <JobList jobs={jobs} />
      </section>
    </main>
  );
};

export default App;
