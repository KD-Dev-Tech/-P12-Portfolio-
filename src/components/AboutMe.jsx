import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import profil from "../../public/assets/testimg.jpg";
import aboutData from "../data/about.json";



function AboutMe() {
    const about = aboutData.about;
    console.log(aboutData);
    return (
        <div>
            <section id="about">
                <img className="profile_image" src={profil} alt="Photo de profil" />
                <div className="about_me">
                    <h1>{about.firstname} {about.lastname}</h1>
                    <h2>{about.title}</h2>
                    <p>{about.description}</p>
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