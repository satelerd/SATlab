import { useState, useEffect } from "react";

function Data() {
    const [launchesApi, setlaunches] = useState([]);
    const launchesData = [];

    useEffect(() => {fetch('https://lldev.thespacedevs.com/2.0.0/launch/upcoming/')
      .then(res => res.json())
      .then(data => {setlaunches(data)})
    }, []);
    console.log(launchesApi);
    
    return(launchesData);
}

export default Data;