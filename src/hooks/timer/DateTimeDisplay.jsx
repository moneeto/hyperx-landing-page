import React from 'react';

export const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'dOffer-countdown danger' : 'dOffer-countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};
