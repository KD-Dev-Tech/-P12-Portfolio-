import { Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';


/**
 * ProjectCard component displays information about a project.
 * Le composant ProjectCard affiche des informations sur un projet.
 *
 * @component
 * @example
 * const project = {
 *   id: 1,
 *   name: 'Kasa',
 *   description: 'Refonte d\'un site de location d\'appartements avec React.',
 *   image: 'assets/images/kasa.webp',
 *   technologies: ['React', 'Figma', 'Node.js'],
 *   github: 'https://github.com/KD-Dev-Tech/P7-kasa'
 * }
 * return (
 *   <ProjectCard project={project} />
 * )
 */

function ProjectCard ({project}) {
    const [showDescription, setShowDescription] = useState(false);

    /**
     * Toggles the visibility of the project description.
     * Basculer la visibilité de la description du projet.
     */

    const handleImageClick = () => {
        setShowDescription(!showDescription);
    };
    return (
        <Card className="project-card"> 
            <Card.Img 
                variant="top" 
                src={`/${project.image}`} 
                alt={project.name} 
                onClick={handleImageClick} 
                style={{ cursor: 'pointer' }} 
                />
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
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;

