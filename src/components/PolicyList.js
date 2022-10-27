import React from "react";
import Select from "react-select"
import SaveC from "./SaveC";

function PolicyList(){
    let options=[
        {
            label:"Standard Plan",
            value:1
        },
        {
            label:"Gold Plan",
            value:2
        },
        {
            label:"Premium Plan",
            value:3
        }
    ];

    return(
        <div>
            <Select options={options} onChange={SaveC.onChangePolicyName}/>
        </div>

    )
}

export default PolicyList;
