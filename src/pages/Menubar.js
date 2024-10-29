import '../css/Menubar.css';
import { Navbar, Nav } from "react-bootstrap";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Menubar() {
    const [activeLink, setActiveLink] = useState('home');

    return (
        <Navbar expand="lg" sticky="top" className="menubar">
            <Navbar.Brand as={NavLink} to="/" className="ps-5">portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-5" activeKey={activeLink} onSelect={(selectedKey) => setActiveLink(selectedKey)}>
                    <Nav.Link as={NavLink} to="/" className="ps-3 pe-3">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/skills" className="ps-3 pe-3">Skills</Nav.Link>
                    <Nav.Link as={NavLink} to="/project" className="ps-3 pe-3">Project</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" className="ps-3 pe-3">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menubar;
