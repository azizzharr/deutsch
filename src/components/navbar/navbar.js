import React, {Component} from 'react';
import './navbar.css'
import {NavLink,FormControl,Button,Form,Nav,Container} from "react-bootstrap";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#link">Link</NavLink>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navbar;