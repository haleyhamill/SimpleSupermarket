import React from "react";

function App() {
    const welcome = "Welcome to our <strong>Supermarket</strong>";
    return(
        <>
        <div dangerouslySetInnerHTML={{__html: welcome}}></div>
        </>
    );
}
