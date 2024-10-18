import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import profil from "../../public/assets/images/Profil-1.webp";
import aboutData from "../containers/data/about.json";
import Banner from "./Banner";
console.log(aboutData);


function AboutMe() {
    const about = aboutData.about;
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
                            <a href="../assets/images/CV.pdf"target="_blank"rel="noopener noreferrer">
                                <Button  bg="dark" variant="info">
                                    Visualiser CV
                                </Button>
                            </a>
                            <Button  bg="dark" variant="info"
                                href="../assets/images/CV.pdf" 
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