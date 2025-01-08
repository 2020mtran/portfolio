import React from 'react';
import "./BlitzBotInfo.css";
import BlitzBotFirstPreview from "../assets/BlitzBotFirstPreview.png";
import BlitzBotSecondPreview from "../assets/BlitzBotSecondPreview.png";

const BlitzBotInfo = () => {
    return (
        <div className="bb-info">
            <div className='bb-info-display'>
                <div className='left-info'>
                    <p className='info-subtitle'>Input your League data!</p>
                    <p className='info-description'>• Users can connect their in-game League of Legends data to the bot!<br />
                    • Simply use the $start command and follow the directions on-screen.<br />
                    • The data is then stored in Firebase tied to the user's Discord ID.
                    </p>
                </div>
                <div className='bb-right-image'>
                    <img src={BlitzBotFirstPreview} alt="First three screenshots of my app"/>
                    <p>A user inputting their League of Legends player data.</p>
                </div>
            </div>
            <div className='info-display'>
                <div className='bb-right-image'>
                    <img src={BlitzBotSecondPreview} alt="Next screenshots of my app"/>
                    <p>Check out this profile and leaderboard!</p>
                </div>
                <div className='right-info'>
                    <p className='info-subtitle'>Check out the profile & server leaderboard!</p>
                    <p className='info-description-right'>• By running the $profile command, users can see which Riot account is tied to their Discord account along with their summoner level and rank.<br />
                    • By using the $leaderboard command, users view the Discord server's leaderboard.<br />
                    • A couple days are shown in between the messages to show that the database works!<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlitzBotInfo;