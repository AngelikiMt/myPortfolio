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
            description: 'this is the first project',
            imgUrl: guiBased,
        },
          {
            title: 'Events App',
            description: 'Another cool project.',
            imgUrl: eventsApp,
        },

    ];


    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab vitae sequi eveniet omnis? Suscipit incidunt iure fuga natus nostrum aliquid? Inventore ullam voluptates veniam placeat ea facilis modi voluptatibus?</p>
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