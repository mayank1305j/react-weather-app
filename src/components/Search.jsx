import React from "react";
import { useData } from "../hooks/useData";

const Search = () => {
  const { refetch, setCity } = useData();
  const handleFocus = (event) => event.target.select();
  return (
    <div className="search">
      <input
        placeholder="City name..."
        autoFocus={true}
        onFocus={handleFocus}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={refetch}>Search</button>
    </div>
  );
};

export default Search;
