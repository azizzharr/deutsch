import React, {Component} from 'react';
import './DeutschLernen.css'
import {Container} from "react-bootstrap";

class DeutschLernen extends Component {
    render() {
        return (
            <div>
<h1 className="text-center">
    Suchen sie eins aus
</h1>
                <ul>
                    <Container>
                    <li className="form-control col-6 form-group">
                        A1
                    </li>
                    <li className="form-control col-6 form-group">
                        A2
                    </li>
                    <li className="form-control col-6 form-group">
                        B1
                    </li>
                    <li className="form-control col-6 form-group">
                        B2
                    </li>
                    <li className="form-control col-6 form-group">
                        C1
                    </li>
                    </Container>
                </ul>
            </div>
        );
    }
}

export default DeutschLernen;