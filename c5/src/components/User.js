import React, { useState } from "react";

const User = () => {

    const [username, setUserName] = useState("@mario5et");
    const [user, setUser] = useState({name: "Mario", age: 26, mail: "mario5etkovski@gmail.com"});

    const ChangeUserName = () => { setUserName("@noviotusername"); }
    const ChangeEMail = () => {
        setUser(prevState => ({ ...prevState, mail: "mario.petkovski@yahoo.com" }));
    }
    
    return (
        <div id="user">
            <button onClick={ChangeUserName}>Set new Username</button>
            <h2>Your user name is: {username}</h2> 

            <hr/>

            <h2>The E-mail of employee <u>{user.name}</u> is <u>{user.mail}</u>. If you want to change it, click on this button here.</h2>
            <button onClick={ChangeEMail}>Change Mail</button>
        </div>
    )
}

export default User;