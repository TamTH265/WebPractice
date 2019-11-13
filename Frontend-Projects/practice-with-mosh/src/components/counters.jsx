import React from 'react';
import PropTypes from 'prop-types';

import Counter from './counter';

const Counters = (props) => {
  const { counters, handleIncrease, handleDelete, handleReset } = props;
  return (
    <>
      <button
        type="button"
        onClick={handleReset}
        className="btn btn-primary m-2"
      >
        Reset
      </button>
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncrease={handleIncrease}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

Counters.propTypes = {
  counters: PropTypes.instanceOf(Array).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Counters;
