import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import { IoLogoTableau } from "react-icons/io5";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import gmail from '../assets/gmail.png';

import '../components/Navbar.css';


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
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/angeliki-matta/" target="_blank" rel="noopener noreferrer"><SlSocialLinkedin size={20} color="#fff" /></a>
                            <a href="https://github.com/AngelikiMt" target="_blank" rel="noopener noreferrer"><FaGithub size={20} color="#fff" /></a>
                            <a href="https://public.tableau.com/app/profile/angeliki.matta/viz/_17436726139030/Story1" target="_blank" rel="noopener noreferrer"><IoLogoTableau size={20} color="#fff" /></a>
                        </div>
                        <HashLink to='#contact'>
                            <button onClick={() => console.log('connect')}>
                                <span>Contact Me <img src={gmail} className="gMail"/></span>
                            </button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;