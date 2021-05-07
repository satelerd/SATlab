import React from 'react'
import './Card.css'

function Card({rocket, launch_provider, misionName, time, year, month, day, hour, imagen}) {
    var hora = ""
    
    if (hour === "TBD") {
        hora = "TBD"
    } else {
        hora = "A las " + hour + " UTC"
    }
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
                        <div className="dia">
                            {day} de {month} de {year}
                        </div>
                        <div className="hora">
                            {hora}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
