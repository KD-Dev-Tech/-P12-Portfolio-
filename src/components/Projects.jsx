import ProjectData from '../containers/data/project.json';
import ProjectCard from '../components/ProjectCard';
// console.log( ProjectData)

/**
 * Project component displays a list of projects.
 * The ProjectCard component displays information about a project.
 * It displays a list of projects using the ProjectCard component.
 * 
 * 
 * Le composant Project affiche une liste de projets en utilisant le composant ProjectCard.
 * le composant ProjectCard affiche des informations sur un projet.
 * Il affiche une liste de projets en utilisant le composant ProjectCard.
 * 
 * @component
 * @example
 * return (
 *   <Project />
 * )
 */

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


