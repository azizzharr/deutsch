import React, {Component} from 'react';
import Center from "../center/center";
import DeutschLernen from "../DeutschLernen/DeutschLernen";
import {BrowserRouter, Route} from "react-router-dom";
import Fotos from "../Fotos/fotos";
import Switch from "react-bootstrap/Switch";
import Register from "../auth/register/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "../auth/signin/sign-in";
import Service from "../service";
import Cookie from "js-cookie";
import Header from "../header/header";
import PaginationPeople from "../pagination/paginatin";

class App extends Component {
    service = new Service()
    state = {
        user: {}
    }

    componentDidMount() {
        this.login()
    }

    login = () => {
        this.service.getUser().then((data) => {
            this.setState({user: data})
        }).catch(() => {
            this.logout()
        })
    }

    logout = () => {
        Cookie.remove("token")
        this.setState({user: {}})
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header  user={this.state.user} logout={this.logout} />
                    <Switch>
                        <Route exact path={'/'}>
                            <Center/>
                            <PaginationPeople/>
                        </Route>
                        <Route exact path={'/DeutschLernen'}>
                            <DeutschLernen/>
                        </Route>
                        <Route exact path={'/Fotos'}>
                            <Fotos/>
                        </Route>
                        <Route exact path={'/Register'}>
                            <Register/>
                        </Route>
                        <Route exact path={"/SignIn"}>
                            <SignIn login={this.login}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;