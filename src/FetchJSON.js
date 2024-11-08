import React, { useState } from "react";

function FetchJSON() {
    [json, setjson] = useState(0);

    fetch("./data/schools.json").then((response) => response.json()).then((_json) => setjson(_json));

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