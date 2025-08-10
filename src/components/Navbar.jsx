import { useState, useEffect } from 'react';
import gmail from '../assets/gmail.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import '../components/NavBar.css';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import { IoLogoTableau } from "react-icons/io5";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#contactMe" className={activeLink === 'contactMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contactMe')}>Contact Me</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#" target="_blank" rel="noopener noreferrer"><SlSocialLinkedin size={20} color="#fff" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub size={20} color="#fff" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><IoLogoTableau size={20} color="#fff" /></a>
                    </div>
                    <HashLink to='#connect'>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Email Me <img src={gmail} class="gMail"/></span>
                        </button>
                    </HashLink>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;