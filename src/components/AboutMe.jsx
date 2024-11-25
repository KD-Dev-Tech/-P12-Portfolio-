import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import profil from "../../public/assets/images/Profil-1.webp";
import background from "../../public/assets/images/image-fond.webp";
import aboutData from "../containers/data/about.json";
import Banner from "./Banner";


/**
 * AboutMe component displays information about the user, including a profile picture,
 * background image, description, contact information, and links to view and download the CV.
 * 
 * Le composant AboutMe affiche des informations sur l'utilisateur, y compris une photo de profil,
 * une image de fond, une description, des informations de contact et des liens pour afficher et télécharger le CV.
 * 
 *
 * @component
 * @example
 * return ( 
 *  <AboutMe />
 * )
 */

function AboutMe() {
    const about = aboutData.about;
    return (
        <div>
            <section id="about">
                <Banner />
                <div className="about-container">
                    <img className="about-background"
                        // style={{zIndex:'1',backgroundSize:'cover',backgroundPosition:'center', position:'absolute', height:'100%', width:'100%', opacity:'0.1'}} 
                        src={background} alt="image de fond" />
                    <img className="about-profile_image" 
                        src={profil} 
                        alt="Photo de profil" />
                    <div className="about-me">
                        <p>{about.description}</p>
                        <p>{about.contact}</p>
                        <div className="about-btn">
                            <a href="../assets/images/CV2.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <Button  bg="dark" variant="info">
                                    Visualiser CV
                                </Button>
                            </a>
                            <Button  bg="dark" variant="info"
                                href="../assets/images/CV2.pdf" 
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