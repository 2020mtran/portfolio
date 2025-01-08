import React from 'react';
import "./MentalMeInfo.css";
import MentalMeFirstPreview from "../assets/MentalMeFirstPreview.png";
import MentalMeSecondPreview from "../assets/MentalMeSecondPreview.png";
import MentalMeThirdPreview from "../assets/MentalMeThirdPreview.png";

const MentalMeInfo = () => {
    return (
        <div className="project-page-info">
            <div className='info-display'>
                <div className='left-info'>
                    <p className='info-subtitle'>Claim Daily Rewards!📆</p>
                    <p className='info-description'>• Upon logging in, users are prompted to claim their free daily login reward in the form of honey coins.<br />
                    • By writing a journal entry daily, users may claim another reward.<br />
                    • Consecutively logging in for a week straight grants a larger reward.
                    </p>
                </div>
                <div className='right-image'>
                    <img src={MentalMeFirstPreview} alt="First three screenshots of my app"/>
                    <p>Loading Page, Home Screen, Daily Tasks</p>
                </div>
            </div>
            <div className='info-display'>
                <div className='left-image'>
                    <img src={MentalMeSecondPreview} alt="Next three screenshots of my app"/>
                    <p>Journal Menu, Creating Journal, Progress Tracker</p>
                </div>
                <div className='right-info'>
                    <p className='info-subtitle'>Journal & Track Progress!📝</p>
                    <p className='info-description-right'>• Users can create journal entries to write about their emotions.<br />
                    • Journal entries cannot be edited so users see their mental health development.<br />
                    • Weekly progress stats show what days of the current week the user has logged in for.<br />
                    • Total daily logins, consecutive logins, and longest all-time login streak are all tracked.
                    </p>
                </div>
            </div>
            <div className='info-display'>
                <div className='left-info'>
                    <p className='info-subtitle'>Chat with Moobie & Redeem Cosmetics!🐻</p>
                    <p className='info-description'>• Moobie the beaver-bear mascot can be interacted with to learn more about the app!<br />
                    • Buy cosmetics from the shop for Moobie using the daily/weekly rewards!<br />
                    • Moobie has different hats, shirts, and lower body wear to equip!
                    </p>
                </div>
                <div className='right-image'>
                    <img src={MentalMeThirdPreview} alt="Last three screenshots of my app"/>
                    <p>Chat with Moobie, Shop Menu, Moobie's Closet</p>
                </div>
            </div>
        </div>
    )
}

export default MentalMeInfo;