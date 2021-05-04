import { useState, useEffect } from "react";

function Data() {
    const [launchesApi, setlaunchesApi] = useState([]);
    
    const request = async () => {
        const response = await fetch('https://lldev.thespacedevs.com/2.0.0/launch/upcoming/');
        const json = await response.json();
        return json;
    }

    useEffect(() => { request()
      .then(data => {setlaunchesApi(data.results)})
    }, []);
    
    return(launchesApi);
}

export default Data;