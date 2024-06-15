import React from 'react';

const Experience = () => {
  // Mock data for experience
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      duration: 'May 2023 - Aug 2023',
      description:
        'Worked on developing frontend components using React.js. Collaborated with team members on feature development and bug fixes.',
    },
    {
      id: 2,
      title: 'Engineering Project Manager',
      company: 'Innovative Tech Labs',
      location: 'New York, NY',
      duration: 'Jan 2022 - Apr 2023',
      description:
        'Led a cross-functional team in the design and implementation of a new product. Managed project timelines, resources, and stakeholder communications.',
    },
    // Add more experiences as needed
  ];

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-item">
          <h3>{experience.title}</h3>
          <p className="experience-details">
            <strong>{experience.company}</strong>, {experience.location}<br />
            {experience.duration}
          </p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
