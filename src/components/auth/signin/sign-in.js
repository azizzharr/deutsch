import React, {Component} from 'react';
import Service from "../../service";
import Cookie from "js-cookie";
import {withRouter} from "react-router-dom";

const initialState = {
    username: "",
    password: ""
}

class SignIn extends Component {
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
        this.service.createLogin(this.state).then((data) => {
                Cookie.set('token', data["auth_token"]);
                this.setState(initialState)
                this.props.login()
                this.props.history.push("/")
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
            <div className='container'>
                <form onSubmit={this.onSubmit}>
                    <div className='col-2'>
                        <label htmlFor='Login'>Login</label>
                        <input onChange={this.onChange} name='username' type='text' placeholder="Login" id='Login' value={this.state.username}/>
                    </div>
                    <div className='col-2'>
                        <label htmlFor='Password'>Password</label>
                        <input onChange={this.onChange} name='password' type='password' placeholder="Password" id='Password' value={this.state.password}/>
                    </div>
                    <button className='btn btn-primary mt-3 ml-3' type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SignIn);