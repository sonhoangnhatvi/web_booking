import React from "react";
import "./SearchList.css";
import SearchListItem from "./SearchListItem";

const SearchList = (props) => {
  return (
    // Render search list
    <ul className={props.className}>
      {props.data.map((search_item) => (
        <SearchListItem data={search_item}></SearchListItem>
      ))}
    </ul>
  )
};

export default SearchList;

