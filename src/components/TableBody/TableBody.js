import React from "react";

function TableBody(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.occupation}</td>
            <td>{props.email}</td>
        </tr>
    )
}


export default TableBody;