import { Container, Row, Col } from "react-bootstrap";
import myPhoto from '../assets/myPhoto.png';
import '../components/Banner.css';
import myCV from '/src/assets/CV-Angeliki_Matta.pdf';
import { FiDownload } from "react-icons/fi";

const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>Hi, I am Angeliki <br/> Software Developer</h1>
                    <p>I am currently pursuing an MSc in Enterprice Software Systems Development. My professional journey has taken me to a Web Development internship, freelance Web Development work and a wide range of personal projects and online courses that supported built my strong programming fundamentals.<br/><br/>I specialize in both frontend and backend development transforming ideas into functional responsive digital experiences using clean code and modern technologies.</p>
                    <a href={myCV} download target="_blank" rel="noopener noreferrer" className="cv-button">
                        <button>Download my CV <FiDownload size={30} /></button>
                    </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={myPhoto} alt="Photo of Me" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;