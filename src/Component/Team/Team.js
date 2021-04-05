import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'


const Team = (props) => {
    const{strTeam,strTeamBadge,strSport,idTeam}=props.team
    return (
        <>  
           
             <div className="card m-4">
            <img src={strTeamBadge} alt="" className="teamImg p-3 d-block mx-auto"/>
            <div className="card-body">
                <h4 className="text-center ">{strTeam}</h4>
                <p className="text-center">Sports Type: {strSport}</p>
             <Link to={`/teamId/${idTeam}`}><button className="btn btn-primary d-block mx-auto pl-5 pr-5">Explore  </button></Link>
            </div>     
        </div>  
        </>
    );
};

export default Team;