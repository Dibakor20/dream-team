import React from 'react';
import PlayerDetails from '../../PlayerDetails/PlayerDetails';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((sum,player)=>sum + player.salary,0)
    return (
        <>
        <h3 className="dreamTeam d-block mx-auto">Make Your Dream Team</h3>
        <div className="info mt-5">
         <div className="feature d-block mx-auto">
                 <div className="text-center pt-3">
            <h3>Total Player:{cart.length}</h3> 
            <h3>Total cost :{total}€</h3>
            </div>
            <div className ="row">
                {                  
                  cart.map(player=><div className="col-4"> <PlayerDetails player={player} key={player.id} ></PlayerDetails></div>)                 
                }  
                </div>  
            </div>
            </div>
                
            
        </>
    );
};

export default Cart;