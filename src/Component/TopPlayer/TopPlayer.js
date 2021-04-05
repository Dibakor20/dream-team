import React, { useEffect, useState } from 'react';
import { PlayerData } from '../../PlayerData';
import Cart from '../Header/Cart/Cart';
import Player from './Player/Player';
import './TopPlayer.css'

const TopPlayer = () => {
    const [players,setPlayer] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        const data =PlayerData.map(player=>{
            player.isConnected=false
            return player
        })
        setPlayer(data)
    },[])
    const handleAddButton=(player,status)=>{
        if(status === "notConnected"){
            setCart([...cart,player])
        }
        else{
            setCart(cart.filter(person=>person.id !== player.id))
        }
        const newCart = players.map(singlePlayer=>{
            if(singlePlayer.id ===player.id){
                singlePlayer={...singlePlayer,"isConnected":!singlePlayer.isConnected}
            }
            return singlePlayer
        })
        setPlayer(newCart)
    }
    return (
        <>
        <div className= "">
        <h1 className="topPlayer">Top Player</h1>
           <div className="row"> 
           {
             players.map(player=><div className="col-lg-3 col-md-4"><Player 
             handleAddButton={handleAddButton}
             player={player} key={player.id}></Player></div>)
          } 
         </div>
         <Cart cart={cart}/>
         </div>
        </>
    );
};

export default TopPlayer;