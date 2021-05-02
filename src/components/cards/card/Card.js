import React from 'react'
import './Card.css'

function Card({title, body, space}) {
    return (
        <div className="">
            <div className="card-img col">
            </div>
            <div className="card-body text-center">
                <div className="card-title">{title}</div>
                <div className="card-text">
                    {body}
                    {space}
                </div>
            </div>
        </div>
    )
}

export default Card
