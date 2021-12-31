import React, {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        });
    }, []);

    if (!users) {
        return null
    }
    return <>
    <h1>Users {{users.length}}</h1>
    </>
}