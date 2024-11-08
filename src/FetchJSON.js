import React, { useState } from "react";

const response = await fetch("./data/schools.json");
const json = await response.json();

function FetchJSON() {
    return (
        <React.Fragment>
            {
                json.schools.map((user, index) => (
                    <option value="">{user}</option>
                ))
            }
        </React.Fragment>
    )
}

export default FetchJSON;