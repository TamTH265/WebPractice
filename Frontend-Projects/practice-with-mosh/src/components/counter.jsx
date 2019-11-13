import React from 'react';
import PropTypes from 'prop-types';

const colorRender = (props) => {
  const { value } = props;
  let className = 'm-2 badge badge-';
  className += value === 0 ? 'warning' : 'primary';
  return className;
};

const Counter = (props) => {
  const { id, value, onIncrease, onDelete } = props;
  return (
    <div className="mt-2">
      <div className={colorRender(props)}>{value}</div>
      <button
        onClick={onIncrease(id)}
        type="button"
        className="btn btn-success m-2"
      >
        Increase
      </button>
      <button
        onClick={onDelete(id)}
        type="button"
        className="btn btn-danger m-2"
      >
        Delete
      </button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

export default Counter;
