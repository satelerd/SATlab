import React from 'react'
import Card from './card/Card.js'
import './Cards.css'

const info = [
    {
        id: 1,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 2,
        title: <h2>Falcon 9</h2>,
        body: <h5>60 Starlink's from SpaceX</h5>
    },
    {
        id: 3,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 4,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 5,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 6,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 7,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 8,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },

]

function Cards({ info_2 }) {
    return (
        <div className="grid">
            <Card title={info[0].title} body={info[0].body} />
            <Card title={info[1].title} body={info[1].body} />
            <Card title={info[2].title} body={info[2].body} />
            <Card title={info[3].title} body={info[3].body} />
            <Card title={info[4].title} body={info[4].body} />
            <Card title={info[5].title} body={info[5].body} />
            <Card title={info[6].title} body={info[6].body} />
            <Card title={info[7].title} body={info[7].body} />

        </div>
    );
};

export default Cards;
