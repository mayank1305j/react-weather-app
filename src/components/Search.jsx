import React from "react";
import Darkmode from "./Darkmode";
import { useData } from "../hooks/useData";

const Search = () => {
  const { refetch, setCity } = useData();
  const handleFocus = (event) => event.target.select();
  return (
    <div className="search">
      <Darkmode />
      <input
        placeholder="City name..."
        autoFocus={true}
        onFocus={handleFocus}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onKeyDown={(e) => e.keyCode === 13 && refetch()}
      />

      <button onClick={refetch}>Search</button>
    </div>
  );
};

export default Search;
