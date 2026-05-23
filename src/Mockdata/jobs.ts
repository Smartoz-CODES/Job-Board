export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    description:
      "Build and maintain user interfaces using React and TypeScript. Collaborate with designers to implement responsive layouts.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    description:
      "Design and implement REST APIs using Node.js. Manage database schemas and optimize query performance.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Genesys Hub",
    location: "Lagos",
    salary: "₦350,000",
    description:
      "Create wireframes, prototypes, and high-fidelity designs. Conduct user research and usability testing.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "AltSchool Inc",
    location: "Remote",
    salary: "₦500,000",
    description:
      "Set up CI/CD pipelines, manage cloud infrastructure on AWS, and monitor application performance.",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Abuja",
    salary: "₦380,000",
    description:
      "Develop cross-platform mobile applications using React Native. Integrate with backend services and third-party APIs.",
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "InsightHub",
    location: "Lagos",
    salary: "₦280,000",
    description:
      "Analyze business data using Python and SQL. Build dashboards and generate reports for stakeholders.",
  },
  {
    id: 7,
    title: "Product Manager",
    company: "MoniePoint Inc",
    location: "Remote",
    salary: "₦600,000",
    description:
      "Define product roadmaps, prioritize features, and coordinate between engineering, design, and business teams.",
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Port Harcourt",
    salary: "₦450,000",
    description:
      "Monitor network traffic for threats, conduct vulnerability assessments, and implement security protocols.",
  },
  {
    id: 9,
    title: "Technical Writer",
    company: "DocuFlow",
    location: "Remote",
    salary: "₦250,000",
    description:
      "Write API documentation, user guides, and internal knowledge base articles for developer tools.",
  },
  {
    id: 10,
    title: "QA Engineer",
    company: "DuoNow Labs",
    location: "Ibadan",
    salary: "₦320,000",
    description:
      "Write and execute test plans, automate regression tests, and track defects through resolution.",
  },
];
