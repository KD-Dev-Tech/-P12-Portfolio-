import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import profil from "../../public/assets/profil/Profil-1.webp";
import aboutData from "../data/about.json";
import Banner from "./Banner";




function AboutMe() {
    const about = aboutData.about;
    console.log(aboutData);
    return (
        <div>
            <section id="about">
                <Banner />
                <div className="about-container">
                    <img className="about-profile_image" src={profil} alt="Photo de profil" />
                    <div className="about-me">
                        <p>{about.description}</p>
                        <p>{about.contact}</p>
                        <div className="about-btn">
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
                </div>
            </section>  
        </div>
    );
}

export default AboutMe;