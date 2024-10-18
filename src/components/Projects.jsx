import ProjectData from '../containers/data/project.json';
import ProjectCard from '../components/ProjectCard';


// console.log( ProjectData)

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


