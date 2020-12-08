import React, {Component} from 'react';
import './center.css'
import {Container} from "react-bootstrap";

class Center extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="text-cent">
                        Германия с первого взгляда
                    </div>
                    <img className="centerImg" src="https://wallpapertag.com/wallpaper/full/b/3/1/866645-neuschwanstein-castle-wallpaper-1920x1080-for-samsung.jpg" alt=""/>

                    <ul>
                           <li>
                               Федеративная Республика Германия находится в
                           </li>
                           <li>
                               самом сердце Европы и является
                           </li>
                           <li>
                               космополитической, демократической страной с
                           </li>
                           <li>
                               давними традициями и живым настоящим.
                           </li>
                           <li>
                               Обзор фактов и цифр
                           </li>
                       </ul>




                </Container>
            </div>
        );
    }
}

export default Center;