import React from "react";

const User = (props) => {
    return (
        <div>
            Occupation: {props.occupation} <br/>
            E-mail: {props.eMail}
        </div>
    )
}

export default User;