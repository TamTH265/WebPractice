import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { countersTotal } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary ml-2">{countersTotal}</span>
      </span>
    </nav>
  );
};

Navbar.propTypes = { countersTotal: PropTypes.number.isRequired };

export default Navbar;
