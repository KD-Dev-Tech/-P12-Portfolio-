import { Button } from "react-bootstrap";
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
                    <Button style={{margin:' 0 auto '}} 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Télécharger mon CV
                    </Button>
                </div>
            </section>  
        </div>
    );
}

export default AboutMe;