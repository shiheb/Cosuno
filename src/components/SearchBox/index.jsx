import React from "react";
import { Box, Search } from "./styles";

const SearchBox = ({ placeholder, handleChange, searchField }) => {
  return (
    <Box>
      <Search
        type="search"
        onChange={handleChange}
        placeholder={placeholder}
        searchField={searchField}
      />
    </Box>
  );
};

export default SearchBox;
