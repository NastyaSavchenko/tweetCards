import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const options = ["Show all", "Follow", "Followings"];

export const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event, value) => {
    setSelectedOption(value);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 200 }}
      value={selectedOption}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField
          color="secondary"
          placeholder="Search..."
          {...params}
          sx={{
            ".MuiOutlinedInput-root .MuiAutocomplete-input": {
              padding: "0",
              outline: "none",
            },
            "& .MuiAutocomplete-root.Mui-expanded.Mui-focused": {
              border: "solid 1px #5736a3",
              borderColor: " #5736a3",
              outline: "none",
            },
            "& .MuiOutlinedInput-root": {
              border: "solid 1px #5736a3",

              "&:hover, &.Mui-focused": {
                boxShadow: "0 0 3px 1px #5736a3",
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: "0",
              color: "#a487d4",

              background: "none",
            },
          }}
        />
      )}
    />
  );
};
