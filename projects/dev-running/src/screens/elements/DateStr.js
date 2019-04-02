import React from 'react';
import moment from 'moment-timezone';

const DateStr = ({ date, timezone }) => {
  const d = moment.tz(date, 'GMT');
  const dateTz = d.clone().tz(timezone);
  const dateFormatted = dateTz.format('DD/MM/YYYY H:mm:ss');

  return <span>{ dateFormatted }</span>;
};

export default DateStr;
