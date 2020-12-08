import React, {Component} from 'react';
import Navbar from "../navbar/navbar";
import Center from "../center/center";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Center/>
            </div>
        );
    }
}

export default App;