import "./Logo.css"
import flask from './flask.png'
import Tilt from 'react-tilt'

function Logo() {
    return (
        <div className="logo">
            <Tilt className="Tilt" options={{ max : 40}} style={{ height: 150, width: 335, "border-radius": 20 }} >
                <div className="Tilt-inner">
                    <img src={flask} alt='logo' style={{ height: 100, width: 100}} />
                    <h1>SATlab</h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo