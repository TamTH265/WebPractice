import React from 'react';
import PropTypes from 'prop-types';

import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => {
  const { click } = props;
  return (
    <button type="button" onClick={click} className="toggle-button">
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

DrawerToggleButton.propTypes = { click: PropTypes.func.isRequired };

export default DrawerToggleButton;
