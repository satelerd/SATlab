import React from 'react'
import './Card.css'

function Card({rocket, launch_provider, misionName, time, imagen}) {
    return (
        <div className="card">
            <div className="card-grid">
                <div className="card-img col">
                    <img src={imagen} alt="Imagen del cohete"></img>
                </div>
                <div className="card-body text-center">
                    <div className="card-title">
                        <div className="rocket">
                            {misionName}
                        </div>
                        <div className={launch_provider + " launch_provider"}>
                            {launch_provider}
                        </div>
                    </div>
                    <div className="card-text">
                        <div className="time">
                            {time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
