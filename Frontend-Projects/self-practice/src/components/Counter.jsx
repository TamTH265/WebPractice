import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'reactstrap';

const colorRender = (value) => (value === 0 ? 'warning' : 'primary');

const Counter = (props) => {
  const { value, onIncrease, onDecrease, onDelete } = props;
  return (
    <div>
      <Badge color={colorRender(value)}>{value}</Badge>
      <Button type="button" color="success" className="m-2" onClick={onIncrease}>Increase</Button>
      <Button type="button" color="secondary" className="m-2" onClick={onDecrease}>Decrease</Button>
      <Button type="button" color="danger" className="m-2" onClick={onDelete}>Delete</Button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Counter;
