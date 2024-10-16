import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrop, faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div id="skills">
        <section className="container-skills p5 skill">
            <h2 className="container_animation">Skills</h2>
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faCrop} className="fa-5x text-danger mb-4" />
                        <h1 className="text-white mb-3"> Front End</h1>
                        <p className="text-white"> Javascript, React, Bootstrap, Redux, Sass </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faCogs} className="fa-5x text-danger mb-4" />
                        <h1 className="text-white mb-3"> Back End</h1>
                        <p className="text-white"> Node.js </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <FontAwesomeIcon icon={faDatabase} className="fa-5x text-danger mb-4" />    
                        <h1 className="text-white mb-3"> Databases</h1>
                        <p className="text-white"> mangodb, Swagger</p>
                    </div>
                </div>
            </div>
	    </section>

        
    </div>
  );
}
export default Skills;