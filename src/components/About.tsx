import React from 'react';

interface AboutProps {
  title?: string;
  description?: string;
}

const About: React.FC<AboutProps> = ({
  title = 'About Flight Info',
  description = 'Flight Info provides real-time flight tracking, status updates, and comprehensive airport information to help you stay informed throughout your journey.',
}) => {
  return (
    <section className="about-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default About;