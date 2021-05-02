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
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
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
]

function Cards({ info_2 }) {
    return (
        <div className="cards">
            <div className="card" key={info[0].id}>
                <Card title={info[0].title} body={info[0].body} />
            </div>

            {/* <div className="card" key={info[1].id}>
                <Card title={info[1].title} body={info[1].body} />
            </div>

            <div className="card" key={info[2].id}>
                <Card title={info[2].title} body={info[2].body} />
            </div>

            <div className="card" key={info[3].id}>
                <Card title={info[3].title} body={info[3].body} />
            </div> */}

        </div>
    );
};

export default Cards;
