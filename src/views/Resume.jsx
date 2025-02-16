import React from 'react';

export default function Resume() {
  return (
    <div className="resume-container">
      <header>
        <h1>Stacey Moenter</h1>
        <p>Email: <a href="staceymoenter@gmail.com">staceymoenter@gamil.com</a> | Phone: (937) 361-9646</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/staceymoenter" target="_blank" rel="noopener noreferrer">linkedin.com/in/staceymoenter</a></p>
      </header>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Physical Therapist</h3>
          <p>Ortho Advantage | 2007–Present</p>
          <ul>
            <li>Provided physical therapy services to patients with musculoskeletal and neurological conditions.</li>
            <li>Developed personalized treatment plans for rehabilitation and pain management.</li>
            <li>Collaborated with healthcare teams to ensure optimal patient care and progress.</li>
            <li>Mentored new physical therapy staff, providing guidance and best practices.</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="degree">
          <h3>Bootcamp for Computer Engineering</h3>
          <p>Ohio State University</p>
          <p>November 2024 – May 2025</p>
          <p>Learning software development, problem-solving, and computer engineering fundamentals.</p>
        </div>

        <div className="degree">
          <h3>Doctorate of Physical Therapy (DPT)</h3>
          <p>Ohio University | 2004–2007</p>
          <p>Comprehensive study of anatomy, kinesiology, and physical rehabilitation techniques.</p>
        </div>

        <div className="degree">
          <h3>Bachelor of Science in Exercise Science</h3>
          <p>High Point University | 2000–2004</p>
          <p>Studied anatomy, biomechanics, and exercise science, with practical experience in rehabilitation and fitness.</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Physical Therapy: Musculoskeletal assessment, therapeutic exercise, injury prevention, rehabilitation.</li>
          <li>Problem Solving: Ability to identify and resolve complex issues in patient care and technical fields.</li>
          <li>Teamwork: Collaborating with healthcare teams, sharing knowledge, and improving patient outcomes.</li>
          <li>Technical Skills: Familiarity with Python, JavaScript, and basic software development principles.</li>
          <li>Communication: Strong verbal and written skills, able to explain complex concepts clearly.</li>
        </ul>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Licensed Physical Therapist (State of Ohio)</li>
          <li>CPR and First Aid Certified</li>
        </ul>
      </section>
    </div>
  );
}
