import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

import myPhoto from '../assets/myPhoto.png';
import '../components/Banner.css';


const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>Hi, I am Angeliki <br/> Software Developer</h1>
                    <p>I am currently pursuing an MSc in Enterprise Software Systems Development. My professional journey has taken me to a Web Development internship, 
                        freelance Web Development work, and a wide range of personal projects and online courses that helped build my strong programming fundamentals.<br/><br/>
                        Alongside my experience in frontend and backend development, I have developed strong skills in SQL, data modeling, and data visualization tools such 
                        as Tableau, allowing me to transform raw datasets into clear, meaningful insights. I specialize in creating functional, responsive digital experiences using clean code, modern technologies, and data-driven decision-making where needed.</p>
                    <a href="#contact" rel="noopener noreferrer" className="cv-button">
                        <button>Drop your message <FiDownload size={30} /></button>
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
