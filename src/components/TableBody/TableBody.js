import React from "react";

function TableBody(props) {
    return (
        <tr>
            <td>{props.employee.id}</td>
            <td>{props.employee.name}</td>
            <td>{props.employee.occupation}</td>
            <td>{props.employee.email}</td>
        </tr>
    )
}


export default TableBody;