import React, { useState } from 'react';
import "./FrontEndDevInfo.css";
import FrontEndDevFirstPreview from "../assets/FrontEndDevFirstPreview.webp";
import FrontEndDevSecondPreview from "../assets/FrontEndDevSecondPreview.webp";
import FrontEndDevThirdPreview from "../assets/FrontEndDevThirdPreview.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FrontEndDevInfo = () => {
    const images = [
        { 
            src: FrontEndDevFirstPreview,
            title: 'Landing Page',
            demoLink: 'https://2020mtran.github.io/odin-landing/',
            repoLink: 'https://github.com/2020mtran/odin-landing',
        },
        {
            src: FrontEndDevSecondPreview,
            title: 'Sign-Up Page',
            demoLink: 'https://2020mtran.github.io/odin-signup/',
            repoLink: 'https://github.com/2020mtran/odin-signup',
        },
        {
            src: FrontEndDevThirdPreview,
            title: 'Admin Dashboard',
            demoLink: 'https://2020mtran.github.io/odin-admin/',
            repoLink: 'https://github.com/2020mtran/odin-admin',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex+1) % images.length);
    }

    const lastImage = () => {
        currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className="fed-project-page-info">
            <div className='fed-image-container'>
                <button className='fed-last-button' onClick={lastImage}>
                    <FontAwesomeIcon icon={faCircleLeft} className='fed-arrow'/>
                </button>
                <img src={images[currentIndex].src} alt="Preview image" className='fed-project-image'></img>
                <button className='fed-next-button' onClick={nextImage}>
                    <FontAwesomeIcon icon={faCircleRight} className='fed-arrow'/>
                </button>
            </div>
            <div className='fed-project-display-info'>
                <p className='fed-display-title'>{images[currentIndex].title}</p>
                <div className='icon-row'>
                    <a href={images[currentIndex].demoLink} target="_blank" rel="noopener norefferer" className='fed-button'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='out-icon'/>
                    </a>
                    <a href={images[currentIndex].repoLink} target="_blank" rel="noopener norefferer" className='fed-button'>
                        <FontAwesomeIcon icon={faGithub} className="fed-github-icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FrontEndDevInfo;