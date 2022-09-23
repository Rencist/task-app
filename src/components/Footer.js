import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p style={{ color: 'grey' }}>Copyright &copy; 2021</p>
      <Link style={{ color: 'grey' }} to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
