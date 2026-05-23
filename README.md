# Job Board

A responsive job listing application built with React and TypeScript. 
Users can browse a list of available job postings and toggle detailed 
information for each role, including location, salary, and job description.

---

## Tech Stack

- **React** — UI component library for building the interface
- **TypeScript** — Added static type checking for safer, more predictable code
- **Vite** — Development server with hot module replacement
- **CSS** — Custom styles with a responsive two-column grid layout

---

## Features

- Displays a list of 10 hardcoded job postings
- Each job card shows the job title and company name by default
- Users can click "Show Details" to reveal location, salary, and description
- Clicking "Hide Details" collapses the information again
- If no jobs are available, a fallback message is displayed instead of an empty page
- Responsive layout: single column on mobile, two columns on wider screens

---

## Project Structure

```
src/
├── Components/
│   ├── job-card.tsx     # Displays a single job with a toggle button
│   └── job-list.tsx     # Receives jobs as props and maps them to JobCard components
├── mockdata/
│   └── jobs.ts          # Job interface definition and hardcoded job data array
├── Style/
│   └── style.css        # All component and layout styles
├── App.tsx              # Root component — imports job data and passes it to JobList
└── main.tsx             # Entry point — mounts the App component into the DOM
```

## React & TypeScript Concepts Demonstrated

**Component Composition** — The UI is broken into three focused components: 
`App` owns the data, `JobList` handles rendering the collection, and `JobCard` 
handles a single item. Each component has it's clear responsibility.

**Typed Props with Interfaces** — The `Job` interface defines the exact shape 
of a job object. Both `JobList` (via `JobListProps`) and `JobCard` (via 
`JobCardProps`) declare what they expect to receive, and TypeScript enforces 
this at compile time.

**Unidirectional Data Flow** — Data travels in one direction: from `jobs.ts` 
into `App`, then as a prop into `JobList`, then as individual items into each 
`JobCard`. No component modifies data that belongs to its parent.

**Local State with useState** — Each `JobCard` manages its own `showDetails` 
boolean independently using the `useState` hook. Toggling one card has no 
effect on the others because state is local to each component instance.

**Conditional Rendering** — Two conditional patterns are used: the `&&` 
operator inside `JobCard` to show or hide the details section, and an early 
return inside `JobList` to display a fallback message when the jobs array is 
empty.

**Type-Only Imports** — The `Job` interface is imported using `import type`, 
distinguishing compile-time type definitions from runtime values as required 
by the project's TypeScript configuration.

---

## Author

Built by Taiwo Olusegun as part of an enrolled frontend development curriculum  at Genesys Hub focusing on Frontend proficiency with React and TypeScript.