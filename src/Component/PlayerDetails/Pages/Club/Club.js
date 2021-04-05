import React, { useEffect, useState } from 'react';
import Team from '../../../Team/Team';
import './Club.css'
import Footer from '../../../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
       
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
  

const Club = () => {
    const classes = useStyles();
    const [teams,setTeams] =useState([])
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams.slice(20,35)))
    })
    return (
        <> 
        <div className="banner-club">
            <div>
               <h1 className="dream d-flex justify-content-center align-self-center">Dream League Scorer</h1> 
               <h1 className="team d-flex justify-content-center align-self-center">Spanish League Details</h1>
              </div>
            </div> 
            <h1 className="topPlayer">Top Club</h1>
            {
                        teams.length === 0 && <div className={classes.root}>
                            
                        <CircularProgress />
                        
                      </div>
                    }
            <div className="row club">
               
                {
                 teams.map(team=><div className="col-lg-4 col-md-4"><Team team={team}></Team></div>)   
                }
            
            </div>
            <Footer/>
        </>
    );
};

export default Club;