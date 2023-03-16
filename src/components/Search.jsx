import React, { useState } from "react";
import Input from "./UI/Input/Input";
import classes from './Style/Search.module.css';

const Search = ({ onChange }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const parse = (e) => {
        setSearchQuery(e.target.value)
        console.log(searchQuery)
        onChange(searchQuery);
    }

    return(
        <div className={classes.search_wrapp}>
            <span className={classes.search_text}>
                Search:
            </span>
            <Input
                value={searchQuery}
                onChange={parse}
                placeholder="Search by text"
            />
        </div>
    );
}

export default Search;