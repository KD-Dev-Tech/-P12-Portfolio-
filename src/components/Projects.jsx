import ProjectData from '../containers/data/project.json';
import ProjectCard from '../components/ProjectCard';


// console.log( ProjectCard)

function Project() {
    const projects = ProjectData.project;
  return (
    <div id='projects'>
      <section className='container-project'>
        <h2 className='container_animation'>Projects</h2>
        <div className='container-project_card'>
          {projects.map((project) => (
  // console.log(project),
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>  
      </section>
    </div>
      
  );
}
export default Project;


{/* <div className="project-container">
  {project.map((project) => (
    <div className="project-card" key={project.id}>
      <img className="project-image" src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      </div>
    </div>
  ))}
</div> */}