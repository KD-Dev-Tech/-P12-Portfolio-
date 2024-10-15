import { Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';



function ProjectCard ({project}) {
    const [showDescription, setShowDescription] = useState(false);

    const handleImageClick = () => {
        setShowDescription(!showDescription);
    };
    
    return (
        <Card className="project-card"> 
            <Card.Img variant="top" src={project.image} alt={project.name} onClick={handleImageClick} 
                style={{ cursor: 'pointer' }} />
            <Card.Body>
                <Card.Title style={{fontWeight:'bold'}}>{project.name}</Card.Title>
                {showDescription && (
                    <div className="project-card__description">
                        <p>{project.description}</p>
                    </div>
                )}
                <div className="project-card__technologies">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="project-card__technology">{tech}</span>
                    ))}
                </div>
                <Button variant="primary" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ marginRight: '8px', backgroundColor:'black',borderRadius:'25px' }} />
                    Voir sur GitHub
                </Button>
            </Card.Body>
        </Card>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;

