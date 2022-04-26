import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export default function Highlights(test) {
  return (
    <p> {test} </p>

    //   groups.map(group => <div>{group.name}</div>)

    // <Autocomplete
    //   id="highlights-demo"
    //   sx={{ width: 300 }}
    //   options={groups}
    //   getOptionLabel={(option) => option.name}
    //   renderInput={(params) => (
    //     <TextField {...params} label="Artist" margin="normal" />
    //   )}
    //   renderOption={(props, option, { inputValue }) => {
    //     const matches = match(option.name, inputValue);
    //     const parts = parse(option.name, matches);

    //     return (
    //       <li {...props}>
    //         <div>
    //           {parts.map((part, index) => (
    //             <span
    //               key={index}
    //               style={{
    //                 fontWeight: part.highlight ? 700 : 400,
    //               }}
    //             >
    //               {part.text}
    //             </span>
    //           ))}
    //         </div>
    //       </li>
    //     );
    //   }}
    // />
  );
}


