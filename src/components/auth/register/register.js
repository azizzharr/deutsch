import React, {Component} from 'react';
import {Form, Button, Container} from "react-bootstrap";
import Service from "../../service";

const initialState = {
    name: '',
    surname: "",
    username: "",
    password: "",
    password2: "",
    email: ""
}

class Register extends Component {

    service = new Service()

    state = initialState

    onChange = (e) => {
        const elem = e.currentTarget
        this.setState({
            [elem.name]: elem.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const state = this.state
        if (state.password !== state.password2) {
            this.setState({error: "Password not same"})
            return;
        }
        this.service.createUser(this.state).then((data) => {
                console.log(data)
                this.setState(initialState)
            }
        ).catch(async ({res}) => {
            // ошибканы кармоо
            const data = await res.json()
            for (let index in data) {
                const error = data[index]
                this.setState({error: error[0]})
            }
        })
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label htmlFor='Name'>Name</Form.Label>
                            <Form.Control onChange={this.onChange} name='name' type="text" placeholder="Name" id='Name'
                                          value={this.state.name}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='SurName'>Surname</Form.Label>
                            <Form.Control onChange={this.onChange} name='surname' type="text" placeholder="Surname"
                                          id='SurName' value={this.state.surname}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label htmlFor='UserName'>Username</Form.Label>
                        <Form.Control onChange={this.onChange} name='username' type='text' placeholder="Username" id='UserName'
                                      value={this.state.username}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label htmlFor='Email'>Email adres</Form.Label>
                        <Form.Control onChange={this.onChange} name='email' type='email' placeholder="Email adres" id='Email'
                                      value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label htmlFor='Password'>Password</Form.Label>
                        <Form.Control onChange={this.onChange} name='password' type='password' placeholder="Password"
                                      id='Password' value={this.state.password}/>
                    </Form.Group>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label htmlFor='Password2'>Confirm password</Form.Label>
                        <Form.Control onChange={this.onChange} name='password2' type='password'
                                      placeholder="Confirm password" id='Password2' value={this.state.password2}/>
                    </Form.Group>
                    <Button type="submit" className='col-3' variant="primary">
                        Register
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register;