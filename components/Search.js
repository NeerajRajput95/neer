import React from "react";

const SearchPage = () => {
  return (
    <div className="active-pink-3 active-pink-4 mb-4" >
    <input className="form-control" style={{width:300}} type="text" placeholder="Search" aria-label="Search" />
    <button class="btn btn-secondary my-2 my-sm-0"  type="submit">Search</button>
    </div>
  );
}

export default SearchPage;