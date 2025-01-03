import React from 'react';
import "./ProjectPageSubContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProjectPageSubContainer = ({ children }) => {
    return (
        <div className="project-page-sub-container">
            <Link to="/" className='back-icon-container'>
                <FontAwesomeIcon icon={faCircleLeft} className='back-icon'/>
            </Link>
            {children}
        </div>
    )
}

export default ProjectPageSubContainer;