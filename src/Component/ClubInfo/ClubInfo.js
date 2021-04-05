import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faFutbol} from '@fortawesome/free-solid-svg-icons'
import { faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import './ClubInfo.css'
import ft from '../../image/Banner12.jpg'
import male from '../../image/male.png'


const ClubInfo = (props) => {
    const {strTeam,strTeamBanner,intFormedYear,strCountry,strSport,strGender,strTeamBadge,strDescriptionEN,strTwitter} = props.clubInfo
    return (
        <>
              <div className="team-banner">
              <img src={ft} alt="" className="team-pic"/>
          </div> 
            <section className="info-club ">
               <div className="team-information d-block mx-auto">
                  <div className="row">
                      <div className="col-md-4 p-4 ml-4">
                        <h3 className="text-white">{strTeam}</h3>
                        <h6 className="text-white"><FontAwesomeIcon icon={faPodcast} /> Founded:   {intFormedYear}</h6>
                        <h6 className="text-white"><FontAwesomeIcon icon={faFlag} /> Country:   {strCountry}</h6>
                        <h6 className="text-white"><FontAwesomeIcon icon={faFutbol} /> Sports Type:   {strSport}</h6>
                        <h6 className="text-white"><FontAwesomeIcon icon={faMarsStroke} /> Gender:   {strGender}</h6>
                      </div>
                      <div className="col-md-3">
                        <img src={strTeamBadge} alt="" className="w-50 mt-5 d-block mx-auto"/>
                      </div>
                      <div className="col-md-4">   
                     <img src={male} alt="" className="w-100 mt-4"/>
                    
                      </div>
                      </div>
                      </div>
                  <div className="description">
                      <p className="text-white descrip">{strDescriptionEN}</p>
                  </div>
              </section>
        </>
    );
};

export default ClubInfo;