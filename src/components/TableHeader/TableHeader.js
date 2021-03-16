import React from "react";

function TableHeader() {
    return (
        <thead>
            <tr>
                <th scope="col">ID:</th>
                <th scope="col">First:</th>
                <th scope="col">Last:</th>
                <th scope="col">Occupation:</th>
                <th scope="col">Email:</th>
            </tr>
        </thead>
    );
}

export default TableHeader;