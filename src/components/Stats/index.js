import React from "react";
import PropTypes from 'prop-types';

const Stats = ({ errors, cpm }) => {
  return (
    <div>
      <span>{`Typos ${errors}`}</span>
      <span>{`  CPM ${cpm}`}</span>
    </div>
  );
}

Stats.propTypes = {
  errors: PropTypes.number.isRequired,
  cpm: PropTypes.number.isRequired

};

export default Stats;
