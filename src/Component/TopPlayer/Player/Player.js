import React from 'react';
import './Player.css'
const Player = (props) => {
    const{img,name,country,club,position,salary,isConnected} = props.player;
    const updateButton=()=>{
        if(isConnected){
            return(<button onClick={()=>props.handleAddButton(props.player,"cart")}  className="btn btn-danger d-block mx-auto">Remove Player</button>)
        }
        else{
            return(<button onClick={()=>props.handleAddButton(props.player,"notConnected")} className="btn btn-success d-block mx-auto">Add Player</button>)
        }
    }
    return (
        <>
         <div className="card m-3">
            <img src={img} alt="" className="playerImg p-3 d-block mx-auto"/>
            <div className="card-body">
                <h4 className="text-center ">{name}</h4>
                <h6 className="text-center">Country: {country}</h6>
                <h6 className="text-center">Club: {club}</h6>
                <h6 className="text-center">position: {position}</h6>
                <h6 className="text-center">fee: {salary}€</h6>
                {
                    updateButton()
                }

            </div>     
        </div>   
        </>
    );
};

export default Player;