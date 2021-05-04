import React from 'react'
import './Card.css'

function Card({rocket, launch_provider, misionName, time}) {
    return (
        <div className="card">
            <div className="card-grid">
                <div className="card-img col">
                    <img src="https://i.blogs.es/2e4467/screenshot-1/450_1000.jpg" alt="Imagen del cohete"></img>
                </div>
                <div className="card-body text-center">
                    <div className="card-title">
                        <div className="rocket">
                            {rocket}
                        </div>
                        <div className="launch_provider">
                            {launch_provider}
                        </div>
                    </div>
                    <div className="card-text">
                        {misionName}
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
