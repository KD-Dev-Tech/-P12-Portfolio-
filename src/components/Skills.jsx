import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrop, faCogs, faDatabase,faFolderOpen } from '@fortawesome/free-solid-svg-icons';

/**
 * Skills component displays the skills of the user.
 * 
 * le composant Skills affiche les compétences de l'utilisateur.
 * 
 * @component 
 * @example
 * 
 * return (
 *  <Skills />
 * )
 * 
 */

function Skills() {
  return (
    <div id="skills">
        <section className="container-skills p5 skill">
            <h2 className="container_animation">Skills</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mb-5 text-center">
                        <FontAwesomeIcon icon={faCrop} className="fa-5x text-danger mb-4" />
                        <h1 className="text-white mb-3"> Front End</h1>
                        <p className="text-white"> Javascript, React, Bootstrap, Redux, Sass </p>
                        <div className='container-img_skill'>
                            <img className='img-fluid' src="assets/images/JS.webp" alt="JavaScript Logo" />
                            <img className='img-fluid' src="assets/images/React.webp" alt="React Logo" />
                            <img className='img-fluid rounded' src="assets/images/Bootstrap.webp" alt="Bootstrap Logo" />
                            <img className='img-fluid rounded' src="assets/images/Redux.webp" alt="Redux Logo" />
                            <img className='img-fluid rounded' src="assets/images/Sass.webp" alt="Sass Logo" />                        
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 text-center">
                        <FontAwesomeIcon icon={faCogs} className="fa-5x text-danger mb-4" />
                        <h1 className="text-white mb-3"> Back End</h1>
                        <p className="text-white"> Node.js </p>
                        <div className='container-img_skill'>
                            <img className='img-fluid rounded' src="assets/images/NodeJs.webp" alt="Node.js Logo" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 text-center">
                        <FontAwesomeIcon icon={faDatabase} className="fa-5x text-danger mb-4" />    
                        <h1 className="text-white mb-3"> Databases</h1>
                        <p className="text-white"> mangodb, Swagger</p>
                        <div className='container-img_skill'>
                            <img className='img-fluid ' src="assets/images//MongoDB.webp" alt="MongoDB Logo" />
                            <img className='img-fluid ' src="assets/images/Swagger.webp" alt="Swagger Logo" />
                        </div>
                    </div>
                    <div className="col-md-4 mb5 text-center">
                        <FontAwesomeIcon icon={faFolderOpen} className="fa-5x text-danger mb-4" />
                        <h1 className="text-white mb-3"> Other</h1>
                        <p className="text-white"> Git, ChatGpt, Figma </p>
                        <div className='container-img_skill'>
                            <img className='img-fluid rounded' src="assets/images/Git.webp" alt="Git logo" />
                            <img className='img-fluid rounded' src="assets/images/Chatgpt.webp" alt="Chatgpt logo" />
                            <img className='img-fluid rounded' src="assets/images/Figma.webp" alt=" logo" />
                        </div>
                    </div>
                </div>
            </div>
	    </section>

        
    </div>
  );
}
export default Skills;