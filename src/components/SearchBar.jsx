import React from "react";
import { useState } from "react";


const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        onSearch(search);
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          handleSearch();
      }
  }

  return (
    <>
        <div className="flex items-center space-x-4 justify-center mt-6">

            <input id="search-bar" type="text" placeholder="Search for a city" 
            className="w-1/2 h-10 border-2 text-indigo-500 bg-slate-200 border-indigo-500 rounded-lg p-2"
            value={search} onChange={(e)=> setSearch(e.target.value)} onKeyPress={handleKeyPress}/>
            <button id="search-button" onClick={handleSearch} 
            className="w-20 h-10 border-2 border-indigo-500 rounded-lg text-indigo-500
            hover:bg-indigo-500 hover:text-white hover:rounded-lg">Search</button>
        </div>
    
    </>

  );
};

export default SearchBar;
