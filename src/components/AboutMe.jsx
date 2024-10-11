import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import profil from "../../public/assets/testimg.jpg";
import aboutData from "../data/about.json";
import '../styles/home.css'



function AboutMe() {
    const about = aboutData.about;
    console.log(aboutData);
    return (
        <div>
            <section id="about">
                <div className="container_animation">
                    <h1>Hello, I&apos;m</h1>
                    <div className="animation">
                        <div className="first">
                            <div style={{display:'flex', alignItems:'self-end'}}>{about.firstname} {about.lastname}</div>
                        </div>
                        <div className="second">
                            <div>{about.title}</div>
                        </div>
                    </div>
                </div>
                {/* <h1>Hello, I&apos;m {about.firstname} {about.lastname}</h1> */}
                <img className="profile_image" src={profil} alt="Photo de profil" />
                <div className="about_me">
                    
        
                    <p>{about.description}</p>
                    <p>{about.contact}</p>
                    <div className="about_btn">
                        <a href="../assets/CV.pdf"target="_blank"rel="noopener noreferrer">
                            <Button style={{borderRadius:'25px'}} bg="dark" variant="info">
                                Visualiser CV
                            </Button>
                        </a>
                        <Button style={{borderRadius:'25px'}} bg="dark" variant="info"
                            href="../assets/CV.pdf" 
                            download="CV_Kevin_Delannoy.pdf"
                            target="_blank" 
                            rel="noopener noreferrer">
                            Télécharger CV
                            <FaDownload style={{ marginLeft: '10px' }} /> 
                        </Button>
                    </div>
                    
                </div>
            </section>  
        </div>
    );
}

export default AboutMe;