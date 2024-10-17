import AboutMe from '../components/AboutMe';
import Project from '../components/Projects';
import Skills from '../components/Skills';
import Form from '../components/Form';
import Footer from '../components/Footer';
import '../styles/Home.css';


function Home() {
  return (
    <>
      <AboutMe />
      <Project />
      <Skills />
      <Form />
      <Footer />
    </>
          
  );
}

export default Home;