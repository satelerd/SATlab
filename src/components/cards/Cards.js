import React from 'react'
import Card from './card/Card.js'
import './Cards.css'

function Cards({ data }) {
    return (
        <div className="grid">
            <Card rocket={data[0].rocket} launch_provider={data[0].launch_provider} misionName={data[0].misionName} time={data[0].time} year={data[0].year} month={data[0].month} day={data[0].day} hour={data[0].hour} imagen={data[0].imagen} />
            <Card rocket={data[1].rocket} launch_provider={data[1].launch_provider} misionName={data[1].misionName} time={data[1].time} year={data[1].year} month={data[1].month} day={data[1].day} hour={data[1].hour} imagen={data[1].imagen} />
            <Card rocket={data[2].rocket} launch_provider={data[2].launch_provider} misionName={data[2].misionName} time={data[2].time} year={data[2].year} month={data[2].month} day={data[2].day} hour={data[2].hour} imagen={data[2].imagen} />
            <Card rocket={data[3].rocket} launch_provider={data[3].launch_provider} misionName={data[3].misionName} time={data[3].time} year={data[3].year} month={data[3].month} day={data[3].day} hour={data[3].hour} imagen={data[3].imagen} />
            <Card rocket={data[4].rocket} launch_provider={data[4].launch_provider} misionName={data[4].misionName} time={data[4].time} year={data[4].year} month={data[4].month} day={data[4].day} hour={data[4].hour} imagen={data[4].imagen} />
            <Card rocket={data[5].rocket} launch_provider={data[5].launch_provider} misionName={data[5].misionName} time={data[5].time} year={data[5].year} month={data[5].month} day={data[5].day} hour={data[5].hour} imagen={data[5].imagen} />
            <Card rocket={data[6].rocket} launch_provider={data[6].launch_provider} misionName={data[6].misionName} time={data[6].time} year={data[6].year} month={data[6].month} day={data[6].day} hour={data[6].hour} imagen={data[6].imagen} />
            <Card rocket={data[7].rocket} launch_provider={data[7].launch_provider} misionName={data[7].misionName} time={data[7].time} year={data[7].year} month={data[7].month} day={data[7].day} hour={data[7].hour} imagen={data[7].imagen} />
            <Card rocket={data[8].rocket} launch_provider={data[8].launch_provider} misionName={data[8].misionName} time={data[8].time} year={data[8].year} month={data[8].month} day={data[8].day} hour={data[8].hour} imagen={data[8].imagen} />
            <Card rocket={data[9].rocket} launch_provider={data[9].launch_provider} misionName={data[9].misionName} time={data[9].time} year={data[9].year} month={data[9].month} day={data[9].day} hour={data[9].hour} imagen={data[9].imagen} />
        </div>
    );
};

export default Cards;
