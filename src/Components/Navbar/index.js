import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../Image';
import WOW from "wowjs";
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() { 
        return(
            <Navbar collapseOnSelect expand="lg">
                <Image file="yura-mobile-375-path.png" className="topGraphic"/>
            <Navbar.Brand href="/"><Image file="yura---team-1920px-logo.svg" className=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav><Navbar.Text><NavLink exact activeClassName="active" to="/">Home</NavLink></Navbar.Text></Nav>
                <Nav><Navbar.Text><NavLink exact activeClassName="active" to="/team">About</NavLink></Navbar.Text></Nav>
                <Nav><Navbar.Text><NavLink exact activeClassName="active" to="/cases">Cases</NavLink></Navbar.Text></Nav>
                <Nav><Navbar.Text><NavLink exact activeClassName="active" to="/contact">Contact</NavLink></Navbar.Text></Nav>
                <Nav><a href="tel:+31 20 244 0000" target="blank"><Navbar.Text>+31 20 244 0000</Navbar.Text></a>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;