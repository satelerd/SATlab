import React from 'react'
import './Card.css'

function Card({ rocket, launch_provider, misionName, time, year, month, day, hour, imagen }) {
    var hora = ""

    if (hour === "TBD") {
        hora = "TBD"
    } else {
        // Lo siguiente cambia el formato de la hora de UTC a GMT-3
        var hourGMT = hour.split(":")
        if (hourGMT[0] === "00") {
            hourGMT[0] = "21"
        } else if (hourGMT[0] === "01") {
            hourGMT[0] = "22"
        } else if (hourGMT[0] === "02") {
            hourGMT[0] = "23"
        } else {
            hourGMT[0] = hourGMT[0] - 3
        }
        hora = hourGMT[0] + ":" + hourGMT[1]

        hora = "A las " + hora + " GMT-3 (Chile)"
    };

    // Cambio de las fotos de SpaceX
    if (imagen === "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210602203321.jpeg" || imagen === "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg") {
        imagen = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Spaceflight_SSO-A_Mission_%2845257570925%29.jpg"
    }
    // Electron
    else if (imagen === "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/electron25202_image_20210511101149.jpg") {
        imagen = "https://img.microsiervos.com/images2017/RocketLabStillTestingEncendido.jpg"
    }
    // Long March 2F
    else if (imagen === "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/long_march_2f_image_20210513092238.jpeg") {
        imagen = "https://i.pinimg.com/originals/30/50/9d/30509d27826f692f78873d964a749d5c.jpg"
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
