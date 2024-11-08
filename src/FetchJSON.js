import React, { useState } from "react";

import data from './data/schools.json';

function FetchJSON() {
    return (
        <React.Fragment>
            {
                data.schools.map((user, index) => (
                    <option value="">{user}</option>
                ))
            }
        </React.Fragment>
    )
}

export default FetchJSON;