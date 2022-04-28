import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export default function Highlights(props) {
  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ width: 300 }}
      options={props.filter}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={props.label} margin="normal" />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);
        const listener = event => {
          if (event.key === 'Enter'){
            console.log('enter pressed')
          }
        }
        return (
          <li {...props}>
            <div listener={listener}>
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


