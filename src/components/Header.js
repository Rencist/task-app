import PropTypes from 'prop-types';
import Button from './Button';
import React from 'react';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={{ color: 'grey' }}>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task List',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
