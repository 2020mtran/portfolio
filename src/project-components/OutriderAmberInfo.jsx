import React from 'react';
import "./OutriderAmberInfo.css";
import OutriderAmberFirstPreview from "../assets/OutriderAmberFirstPreview.png";
import OutriderAmberSecondPreview from "../assets/OutriderAmberSecondPreview.png";
import OutriderAmberThirdPreview from "../assets/OutriderAmberThirdPreview.png";

const OutriderAmberInfo = () => {
    return (
        <div className="oa-info">
            <div className='oa-info-display'>
                <div className='left-info'>
                    <p className='info-subtitle'>Notifications for Drops!</p>
                    <p className='info-description'>• A Discord Bot called Karuta is a massively played activity.<br />
                    • Users can drop cards of their favorite anime or popular series.<br />
                    • Outrider Amber is a bot that supports Karuta by notifying server members when new cards release.
                    </p>
                </div>
                <div className='oa-right-image'>
                    <img src={OutriderAmberFirstPreview} alt="First three screenshots of my app"/>
                    <p>Note the bot in action at the bottom!</p>
                </div>
            </div>
            <div className='info-display'>
                <div className='oa-right-image'>
                    <img src={OutriderAmberSecondPreview} alt="Next three screenshots of my app"/>
                    <p>A user accessing the commands menu to obtain or remove a role.</p>
                </div>
                <div className='right-info'>
                    <p className='info-subtitle'>Obtain different roles!</p>
                    <p className='info-description-right'>• Based on the wishlist (wl) count of different cards, different tiers of notifications will appear.<br />
                    • The tiers include: common (100-199wl), uncommon (200-500wl), rare (500-999wl), epic (1000-1999wl), legendary (2000+wl)<br />
                    • The bot analyzes the wishlist of a new release and notifys the appropriate role.<br />
                    </p>
                </div>
            </div>
            <div className='info-display'>
                <div className='left-info'>
                    <p className='info-subtitle'>Servicing Hundreds of Users!</p>
                    <p className='info-description'>• Users are also able to remove the roles in case they change their mind.<br />
                    • Hundreds of users had access to the bot's utilities.<br />
                    • AWS Cloud Services enabled the bot to have 24/7 runtime.
                    </p>
                </div>
                <div className='right-image'>
                    <img src={OutriderAmberThirdPreview} alt="Last three screenshots of my app"/>
                    <p>A server the bot was in, and the bot confirming roles being moved around.</p>
                </div>
            </div>
        </div>
    )
}

export default OutriderAmberInfo;