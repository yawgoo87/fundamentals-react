import React from "react";
import DropDownList from "./UI/DropDownList/DropDownList";

const  PostFilter = ({filter, setFilter}) => {

    return(
        <div>
            <DropDownList
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Sort by"}
                options={[
                {value: 'title', name: 'By header'},
                {value: 'body', name: 'By description'}
                ]}
            />

            <input 
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder="Search"
            />
        </div>
    )
};

export default PostFilter;