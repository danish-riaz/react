import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ changeHandler }) => {
  return (
    <div className="fl-right">
      <input
        className="searchbox"
        type="serch"
        placeholder="Search Talent"
        onChange={changeHandler}
      ></input>
      <button type="submit" className="searchboxicon">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};
