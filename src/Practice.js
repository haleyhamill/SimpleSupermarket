import React from "react";
import {useHistory} from "react-router-dom";

export default function Home() {
    const history = useHistory();

    function handleClick() {
        history.push('/dashboard')
    }

    return <button onClick={handleClick}>Start</button>;
}