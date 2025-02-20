import React from 'react';
import './Projects.css';
import OutriderAmber from "../assets/OutriderAmberIcon.webp";
import BlitzBot from "../assets/BlitzBotIcon.webp";
import MentalMe from "../assets/MentalMeIcon.webp";
import CombinationProjects from "../assets/CombinationProjects.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';
import firebaseIcon from '../assets/firebase-svgrepo-com.svg';
import expoGoIcon from '../assets/expo-go-app.svg';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="projects">
            <p>Projects</p>
            <Link to="./pages/ProjectMentalMe" className="project-individual">
                <img src={MentalMe} alt="Icon of my mobile app, MentalMe"></img>
                <div className="project-information">
                    <p className="project-title">MentalMe</p>
                    <div className="roles-list">
                        <div className="project-role">
                            <FontAwesomeIcon icon={faReact} style={{color: "#086fac",}} className="react-icon"/>
                            <p>React</p>
                        </div>
                        <div className="project-role">
                            <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>JavaScript</p>
                        </div>
                        <div className="project-role">
                            <FontAwesomeIcon icon={faCss3Alt} style={{color: "#086fac",}} className="react-icon"/>
                            <p>CSS</p>
                        </div>
                        <div className="project-role">
                            <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>HTML</p>
                        </div>
                        <div className="project-role">
                            <img src={expoGoIcon} alt="ExpoGo Icon" className="react-icon" />
                            <p>Expo Go</p>
                        </div>
                        <div className="project-role">
                            <img src={firebaseIcon} alt="MongoDB Icon" className="react-icon" />
                            <p>Firebase</p>
                        </div>
                    </div>
                    <p className="project-description">MentalMe is a mental health mobile app that reminds users to care for their mental health. Users can journal, 
                    chat with the app’s mascot, and claim daily/weekly login rewards.</p>
                </div>
            </Link>
            <Link to="./pages/ProjectFrontEndDev" className="project-individual">
                <img src={CombinationProjects} alt="Icon of a combination of my web development work"></img>
                <div className="project-information">
                    <p className="project-title">Front-End Dev Projects</p>
                    <div className="roles-list">
                    <div className="project-role">
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#086fac",}} className="react-icon"/>
                        <p>CSS</p>
                    </div>
                    <div className="project-role">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>HTML</p>
                    </div>
                    </div>
                    <p className="project-description">Developed a modern landing page, sign-up page, and admin dashboard for a company’s use.</p>
                </div>
            </Link>
            <Link to="./pages/ProjectOutriderAmber" className="project-individual">
                <img src={OutriderAmber} alt="Icon of my bot, Outrider Amber"></img>
                <div className="project-information">
                    <p className="project-title">Outrider Amber</p>
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
                    <p className="project-description">Outrider Amber is a Discord bot that allow users to obtain roles and ping them when new content releases from another Discord bot/game.</p>
                </div>
            </Link>
            <Link to="./pages/ProjectBlitzBot" className="project-individual">
                <img src={BlitzBot} alt="Icon of my bot, BlitzBot"></img>
                <div className="project-information">
                    <p className="project-title">BlitzBot</p>
                    <div className="roles-list">
                        <div className="project-role">
                            <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                            <p>Python</p>
                        </div>
                        <div className="project-role">
                            <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>Discord & Riot Games API</p>
                        </div>
                        <div className="project-role">
                            <img src={mongodbIcon} alt="MongoDB Icon" className="react-icon" />
                            <p>mongoDB</p>
                        </div>
                    </div>
                    <p className="project-description">BlitzBot is a Discord bot aimed to allow users to make personal League of Legends ranking leaderboards amongst their friends.</p>
                </div>
            </Link>
        </div>
        
    );
};

export default Projects;