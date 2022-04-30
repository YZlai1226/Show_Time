import React, { useState, useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// import './DateFilter.css';

const DateFilter = (props) => {
  // const [selectionRanges, setSelectionRanges] = useState(({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: 'selection',
  // }), []);

  useEffect(() => {
    document.getElementsByClassName('rdrDefinedRangesWrapper')[0].style.display = 'none';
  }, []);

  // const onDatesChange = (ranges) => {
  //   setSelectionRanges(ranges.selection);
  // }

  return (
    <DateRangePicker
      ranges={[props.selectionRanges]}
      onChange={props.onDatesChange}
      disabledDay={(date) => date < Date.now()}
      showPreview={false}
    />
  
  );
};

export default DateFilter;

