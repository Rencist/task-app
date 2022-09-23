import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h4>Version 6.9</h4>
      <Link style={{ color: 'grey' }} to="/">
        Go Back
      </Link>
    </div>
  );
};

export default About;
