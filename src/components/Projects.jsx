import React from 'react';
import './Projects.css';
import OutriderAmber from "../assets/OutriderAmber.jpg";
import BlitzBot from "../assets/BlitzBotIcon.jpg";
import MentalMe from "../assets/MentalMeIcon.jpg";
import CombinationProjects from "../assets/CombinationProjects.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons';
import mongodbIcon from '../assets/mongodb-svgrepo-com.svg';
import firebaseIcon from '../assets/firebase-svgrepo-com.svg';
import expoGoIcon from '../assets/expo-go-app.svg';

const Projects = ({ children }) => {
    return (
        <div className="projects">
            <p>Projects</p>
            <div className="project-individual">
                <img src={MentalMe} alt="Icon of my mobile app, MentalMe"></img>
                <div className="project-information">
                    <p className="project-title">MentalMe</p>
                    <div className="roles-list">
                        <div className="role1">
                            <FontAwesomeIcon icon={faReact} style={{color: "#086fac",}} className="react-icon"/>
                            <p>React</p>
                        </div>
                        <div className="role1">
                            <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>JavaScript</p>
                        </div>
                        <div className="role1">
                            <FontAwesomeIcon icon={faCss3Alt} style={{color: "#086fac",}} className="react-icon"/>
                            <p>CSS</p>
                        </div>
                        <div className="role1">
                            <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>HTML</p>
                        </div>
                        <div className="role1">
                            <img src={expoGoIcon} alt="ExpoGo Icon" className="react-icon" />
                            <p>Expo Go</p>
                        </div>
                        <div className="role1">
                            <img src={firebaseIcon} alt="MongoDB Icon" className="react-icon" />
                            <p>Firebase</p>
                        </div>
                    </div>
                    <p className="project-description">MentalMe is a mental health mobile app that reminds users to care for their mental health. Users can journal, 
                    chat with the app’s mascot, and claim daily/weekly login rewards.</p>
                </div>
            </div>
            <div className="project-individual">
                <img src={CombinationProjects} alt="Icon of a combination of my web development work"></img>
                <div className="project-information">
                    <p className="project-title">Front-End Development Projects</p>
                    <div className="roles-list">
                    <div className="role1">
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#086fac",}} className="react-icon"/>
                        <p>CSS</p>
                    </div>
                    <div className="role1">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#FFD43B",}} className="react-icon"/>
                        <p>HTML</p>
                    </div>
                    </div>
                    <p className="project-description">Developed a modern landing page, sign-up page, and admin dashboard for a company’s use.</p>
                </div>
            </div>
            <div className="project-individual">
                <img src={OutriderAmber} alt="Icon of my bot, Outrider Amber"></img>
                <div className="project-information">
                    <p className="project-title">Outrider Amber</p>
                    <div className="roles-list">
                        <div className="role1">
                            <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                            <p>Python</p>
                        </div>
                        <div className="role1">
                            <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>Discord API</p>
                        </div>
                        <div className="role1">
                            <FontAwesomeIcon icon={faAws} style={{color: "#086fac",}} className="react-icon"/>
                            <p>AWS Cloud Services</p>
                        </div>
                    </div>
                    <p className="project-description">Outrider Amber is a Discord bot allow users to obtain roles within Discord servers and ping them when specific content was detected such as new content releases from another Discord bot.</p>
                </div>
            </div>
            <div className="project-individual">
                <img src={BlitzBot} alt="Icon of my bot, BlitzBot"></img>
                <div className="project-information">
                    <p className="project-title">BlitzBot</p>
                    <div className="roles-list">
                        <div className="role1">
                            <FontAwesomeIcon icon={faPython} style={{color: "#086fac",}} className="react-icon"/>
                            <p>Python</p>
                        </div>
                        <div className="role1">
                            <FontAwesomeIcon icon={faDownload} style={{color: "#FFD43B",}} className="react-icon"/>
                            <p>Discord API</p>
                        </div>
                        <div className="role1">
                            <img src={mongodbIcon} alt="MongoDB Icon" className="react-icon" />
                            <p>mongoDB</p>
                        </div>
                    </div>
                    <p className="project-description">BlitzBot is a Discord bot aimed to allow users to make personal League of Legends ranking leaderboards amongst their friends.</p>
                </div>
            </div>
        </div>
        
    );
};

export default Projects;