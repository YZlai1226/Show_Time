import React, { useState, useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// import './DateFilter.css';

const DateFilter = (props) => {
  const [selectionRanges, setSelectionRanges] = useState(({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }), []);

  useEffect(() => {
    document.getElementsByClassName('rdrDefinedRangesWrapper')[0].style.display = 'none';
  }, []);

  const onDatesChange = (ranges) => {
    setSelectionRanges(ranges.selection);
  }

  return (
    <DateRangePicker
      ranges={[selectionRanges]}
      onChange={onDatesChange}
      disabledDay={(date) => date < Date.now()}
      showPreview={false}
    />
  );
};

export default DateFilter;

// import DatePicker from 'react-date-picker';
// import React, { useEffect, useState } from 'react';

// function DateFilter(props) {
//     const [value, onChange] = useState(new Date());
//     // const [valueTest, setValueTest]=useState('HELLO DEAR');

//     useEffect(() => {
//       props.onChange(value);
//     });
//     return (
//         <div>
//         <DatePicker onChange={onChange} value={value} />
//       </div>
//     );
//   }
//   export default DateFilter;