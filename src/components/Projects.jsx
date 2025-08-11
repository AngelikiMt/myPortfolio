import '../components/Projects.css';
import "react-multi-carousel/lib/styles.css";
import '../components/ProjectCart'
import guiBased from "../assets/GUI-based.png"
import eventsApp from "../assets/events-app.png"
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import ProjectCart from '../components/ProjectCart';

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    const projects = [
        {
            title: 'Monsters VS Knights',
            description: 'A turn-based console game developed in native Java. It simulates a dynamic battle between the Knights and the Monsters, on an interactive map. The user-player controls a unique Avatar to observe the flow of the battle.',
            imgUrl: guiBased,
        },
          {
            title: 'Events App',
            description: 'A MERN full-stack web application, built to help users discover, browse, create, and manage events across various cities in Greece.',
            imgUrl: eventsApp,
        },

    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>These projects are the milestones in my growth into developing. From immersive games like Monsters VS Knights to practical applications like the Event App, each project reflects my excitement for solving real-world problems through clean design and thoughtful code. I aim to fully responsive User Interfaces while I approach every challenge with curiosity and a drive to learn.</p>
                        <Carousel responsive={responsive} infinite={true}>
                            {projects.map((project, index) => (
                                <div className="carousel-item-wrapper" key={index}>
                                    <ProjectCart {...project} />
                                </div>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;