// import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
    <footer className="bg-darken text-center text-white">
      {/* <div className="container pt-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href=""
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href=""
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20}/>
          </a>
      </div> */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: KD
      </div>
    </footer>

    </div>
  );
}
export default Footer;