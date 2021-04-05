import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
          
          <footer>
                <div class="last">
                    <div class="row">
                      <div class="col-3">
                        <p className="proxilus ">Football news, scores, results, fixtures and videos from the Premier League, Championship, European and World Football from the BBC.</p>
                      </div>
                      <div class="col-2">
                          <h5 className="use pb-2">Useful Links</h5>
                          <p>About</p>
                          <p>Team</p>
                          <p>Player</p>
                          <p>Careers</p>
                          <p>Top</p>
                      </div>
                      <div class="col-2 ">
                        <h5 className="use  pb-2">Top Club</h5>
                        <p>Paris</p>
                        <p>London</p>
                        <p>Dubai</p>
                        <p>Los angeless</p>
                        <p>Miami</p>
                      </div>
                      <div class="col-3 ">
                        <h5 className="use  pb-2">Learn More</h5>
                        <p>How to Work</p>
                        <p>Become a Partner</p>
                        <p>Trust & Safety</p>
                        <p>Faqs</p>
                        <p>Get Help</p>
                      </div>
                      <div class="col-2 ">
                        <h5 className="use  pb-2">Player Type</h5>
                        <p>Stricker</p>
                        <p>Goalkeeper</p>
                        <p>Midfield</p>
                        <p>Substitute</p>
                        <p>Defender</p>
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="row">
                        <div class="col-8">
                            <p>Copyright © 2021 Debakor,All Right Reserved</p>
                        </div>
                        <div class="col-4">
                            <p class="term">Terms & Services <span class="privacy">Privacy Policy</span> Sitemap</p>
                        </div>
                    </div>
                  </div>
              </footer>  
        </>
    );
};

export default Footer;