import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';

const Backdrop = (props) => {
  const { backdropClickHandler } = props;
  return (
    <div className="backdrop" onClick={backdropClickHandler} />
  );
};

Backdrop.propTypes = { backdropClickHandler: PropTypes.func.isRequired };

export default Backdrop;
