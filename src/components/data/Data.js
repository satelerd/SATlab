import { useState, useEffect } from "react";

const api = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/"
// const apiDev = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/"

function Data() {
    const [launchesApi, setlaunchesApi] = useState([]);
    
    const request = async () => {
        const response = await fetch(api);
        const json = await response.json();
        return json;
    }

    useEffect(() => { request()
      .then(data => {setlaunchesApi(data.results)})
    }, []);
    
    return(launchesApi);
}

export default Data;