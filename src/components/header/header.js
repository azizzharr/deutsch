import React, {Component, Fragment} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from "react-bootstrap";
import './header.css'
import {Link,} from "react-router-dom";
import Service from "../service";

class Header extends Component {
    service = new Service()

    render() {
        return (
            <div>
                <Navbar className="bgColor" expand="lg">
                    <Container>
                    <Link className="Link" to="/home" >Home</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="ml-2 dark Link " to="/react">Fotos</Link>
                            <Link className="ml-2 dark Link " to="/link">Link</Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                        <form  className="form-inline my-2 my-lg-0">
                            {this.props.user.username ?
                                <Fragment>
                                    <Button onClick={() => {
                                        this.service.deleteLogin().then(() => {
                                            this.props.logout()
                                        })
                                    }} variant="outline-primary">Sign Out</Button>
                                    <p style={{color: "white", paddingRight: "10px",marginLeft:"40px"}}>{this.props.user.username}</p>
                                </Fragment>
                                :
                                <Fragment>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                    </button>
                                    <Link to={"/Register"}>
                                        <button className='btn btn-outline-success my-2 my-sm-0 ml-2'
                                                type="submit">Register
                                        </button>
                                    </Link>
                                    <Link to={"/SignIn"}>
                                        <button className="btn btn-outline-success my-2 my-sm-0 ml-2"
                                                type="submit">Sign
                                            In
                                        </button>
                                    </Link>
                                </Fragment>
                            }
                        </form>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;