import React from 'react';
import "./OutriderAmberHeader.css";
import OutriderAmber from '../assets/OutriderAmberIcon.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const OutriderAmberHeader = () => {
    return (
        <div className="oa-project-page-header">
            <img src={OutriderAmber} alt="Icon of my app, OutriderAmber" />
            <div className="oa-project-page-header-info">
                <p className='oa-project-title'>OutriderAmber
                    <a
                        href="https://github.com/2020mtran/outrider-amber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='oa-github-button'>
                            <FontAwesomeIcon icon={faGithub} className='oa-github-icon'></FontAwesomeIcon>
                    </a>
                </p>
                <div className="roles-list">
                    <div className="project-role">
                        <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                        <p>Python</p>
                    </div>
                    <div className="project-role">
                        <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>Discord API</p>
                    </div>
                    <div className="project-role">
                        <FontAwesomeIcon icon={faAws} style={{color: "#086fac",}} className="react-icon"/>
                        <p>AWS Cloud Services</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutriderAmberHeader;