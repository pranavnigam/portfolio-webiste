import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <div className="container">
        <header>
            <h1>Pranav Nigam</h1>
            <p>Software Engineer | Full Stack Developer</p>
            <p>Bangalore, India | pranav.nigs@gmail.com | +91 960-290-4323</p>
        </header>

        <section className="summary">
            <h2>Summary</h2>
            <p>A dedicated and experienced software developer with more than 4 years of full-stack development expertise. Committed to delivering high-quality software solutions and eager to contribute knowledge while continuously enhancing skills.</p>
        </section>

        <section className="experience">
            <h2>Professional Experience</h2>
            <div className="job">
                <h3>Software Engineer</h3>
                <p><strong>Walmart - Bangalore</strong> | 10/2021 - Present</p>
                <ul>
                    <li>Designed and developed a new user interface for Walmart Career site.</li>
                    <li>Implemented event-driven architecture for external candidate applications.</li>
                    <li>Optimized cloud infrastructure, reducing costs by 30%.</li>
                    <li>Developed an Internal Poker tool for project tracking and estimation.</li>
                </ul>
            </div>
            <div className="job">
                <h3>Software Engineer</h3>
                <p><strong>NovoInvent Software - Noida</strong> | 06/2020 - 09/2021</p>
                <ul>
                    <li>Developed onboarding module reducing manual onboarding by 80%.</li>
                    <li>Created trading modules increasing order placement efficiency by 35%.</li>
                    <li>Engaged with stakeholders, reducing feedback cycles by 30%.</li>
                </ul>
            </div>
        </section>

        <section className="skills">
            <h2>Technical Skills</h2>
            <ul>
                <li>React, Angular, JavaScript, TypeScript</li>
                <li>Java, Spring Boot, Microservices</li>
                <li>Node.js, Elastic Search, MySQL, Azure SQL</li>
                <li>Docker, Kubernetes, Jenkins (CI/CD)</li>
                <li>Test Driven Development, System Design, Agile</li>
            </ul>
        </section>

        <section className="education">
            <h2>Education</h2>
            <p><strong>Bachelor&apos;s of Engineering: Computer Science</strong></p>
            <p>Chitkara University, India | 2020</p>
        </section>
    </div>
  );
};

export default ProjectResume;
