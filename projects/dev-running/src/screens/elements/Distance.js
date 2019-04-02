import React from 'react';

const Distance = ({ distance, metric }) => {
  let distanceStr = '';

  // Consider default - metric
  if (metric === 'metric') {
    distanceStr = distance + 'km';
  }
  else {
    // 1 km = 0,621371 miles
    const distanceMi = distance * 0.621371;
    distanceStr = distanceMi.toFixed(2) + 'mi';
  }

  return <span>{ distanceStr }</span>;
};

export default Distance;
