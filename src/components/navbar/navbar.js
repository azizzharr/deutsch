import React, {Component, Fragment} from 'react';
import './navbar.css'
import {Container,Button, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import Service from "../service";


class Navbar extends Component {
    service = new Service()

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <Container>
                        <NavLink className="navbar-brand" to="/Home">Home</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/DeutschLernen">Deutsch lernen <span
                                        className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/Fotos">Fotos und Videos <span
                                        className="sr-only">(current)</span></NavLink>
                                </li>

                            </ul>
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
                        </div>
                    </Container>
                </nav>
            </div>
        );
    }
}

export default Navbar;