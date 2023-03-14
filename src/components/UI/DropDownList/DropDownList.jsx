import React from "react";
import classes from './DropDownList.module.css'

const DropDownList = ({ options, defaultValue, value, onChange }) => {

    return(
        <div className={classes.drop_down_wrapp}>
            <span>Sort: </span>
            <select name="" id=""
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled>{defaultValue}</option>
                {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
            </select>
        </div>
        
    )
}

export default DropDownList;