import { Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';


function projectCard ({project}) {
    return (
        <Card className="project-card"> 
            <Card.Img variant="top" src={project.image} alt={project.name} />
            <Card.Body>
                <Card.Title style={{fontWeight:'bold'}}>{project.name}</Card.Title>
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
        
    )
}
export default projectCard;