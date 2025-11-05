import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";

import guiBased from "../assets/GUI-based.png";
import eventsApp from "../assets/events-app.png";
import retailHub from "../assets/retailHub.png";
import qm from "../assets/qm.png";
import tripsTracking from "../assets/tripsTracking.png";
import ProjectCart from '../components/ProjectCart';

import "../components/Projects.css";
import "react-multi-carousel/lib/styles.css";
import "../components/ProjectCart";


const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 2
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    const projects = [
        {
            title: 'Quality Remodeling Website',
            description: "A full-stack website, designed for informing users about company's projects and other information. Built with node.js, Express.js, React and bootstrap",
            imgUrl: qm,
            gitHubUrl: 'https://newqm.onrender.com/'
        },
        {
            title: 'RetailHub Capstone Project',
            description: 'A full-stack information system developed for complete restructuring of business operations (CRUD) and enhancing the management of customers, products, inventory and transactions. Built with native Java, GUI-Swing UI, SQL database, maven and JDBC API.',
            imgUrl: retailHub,
            gitHubUrl: 'https://github.com/AngelikiMt/RetailHub_Project/tree/fullstack_version'
        },
        {
            title: 'Trips Tracking App',
            description: 'A Flask-based web application designed to help travelers plan and manage their trips more effectively, while also enabling travel agents to enhance their services through a certalized trips managements system. Built with Flask, HTML and Bootstrap.',
            imgUrl: tripsTracking,
            gitHubUrl: 'https://github.com/AngelikiMt/TripsTracking'
        },
        {
            title: 'Events App',
            description: 'A MERN full-stack web application, built to help users discover, browse, create, and manage events across various cities in Greece. Built with Node.js, Express.js, MongoDB and React-Vite.',
            imgUrl: eventsApp,
            gitHubUrl: 'https://github.com/AngelikiMt/events-app'
        },
        {
            title: 'Monsters VS Knights',
            description: 'A turn-based console game that simulates a dynamic battle between the Knights and the Monsters, on an interactive map. The user-player controls a unique Avatar to observe the flow of the battle. Built with native java.',
            imgUrl: guiBased,
            gitHubUrl: 'https://github.com/AngelikiMt/MonstersVSKnights'
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