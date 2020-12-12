import React, {Component} from 'react';
import Dog from "./dog/dog";
import './fotos.css'
import {Container, Row} from "react-bootstrap";


class Fotos extends Component {
    render() {
        return (
            <div>
                <Container>
                <h1>
                    Fotos
                </h1>
                <div className="">
                    <Row className="form-group">
                    <Dog  className="ml-4 col-3 offset-md-1"/>
                    <Dog  className="col-3 offset-md-1"/>
                    <Dog  className="col-3 offset-md-1"/>
                    </Row>
                    <Row className="form-group">
                        <Dog  className="ml-4 col-3 offset-md-1"/>
                        <Dog  className="col-3 offset-md-1"/>
                        <Dog  className="col-3 offset-md-1"/>
                    </Row>



                </div>
                </Container>
            </div>
        );
    }
}

export default Fotos;