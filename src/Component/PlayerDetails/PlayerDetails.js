import React from 'react';
import './PlayerDetails.css'

const PlayerDetails = (props) => {
    const {img,name,country,club,position,salary} =props.player
    console.log(props.player)
    return (
        <>
        <div className="container">
            <img src={img} alt="" className="imgDetails  d-block mx-auto"/>
            <h6 className="text-center">{name}</h6>
        </div>
        </>
    );
};

export default PlayerDetails;