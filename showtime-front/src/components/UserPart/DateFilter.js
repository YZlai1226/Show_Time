import DatePicker from 'react-date-picker';
import React, { useEffect, useState } from 'react';

function DateFilter(props) {
    const [value, onChange] = useState(new Date());
    // const [valueTest, setValueTest]=useState('HELLO DEAR');

    useEffect(() => {
      props.onChange(value);
    });
    return (
        <div>
        <DatePicker onChange={onChange} value={value} />
      </div>
    );
  }
  export default DateFilter;