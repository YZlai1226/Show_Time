import React, { useState /*, useEffect*/ } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';


export default function Highlights(props) {
const [inputValue, setInputValue] = useState('');

// const onChange =(inputValue) => {
// setInputValue(inputValue);
// };

  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ width: 300 }}
      options={props.filter}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => props.onChange(value)}
      renderInput={(params) => (
        <TextField {...params} label={props.label} margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);
          // console.log('INPUTVALUE: ', inputValue)
          // console.log('LABEL: ', props.label)
        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
      />
  );
}


