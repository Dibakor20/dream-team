import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ClubInfo from '../ClubInfo/ClubInfo';

const ClubDetails = () => {
    const{idTeam}=useParams()
    const[clubInfo,setClubInfo] = useState([])
    const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setClubInfo(data.teams[0]))
    },[])
    return (
        <>  
        
            <ClubInfo clubInfo={clubInfo}></ClubInfo>
        </>
    );
};

export default ClubDetails;