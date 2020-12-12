import React, {Component} from 'react';
import './products-item.css'


class ProductsItem extends Component {
    render() {
        const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, deleteProduct} = this.props;
        return (
            <li className="product-item col-md-4">
                <h3 className="product-title" title={name}>{name}</h3>
                <p>height: <span>{height}</span></p>
                <p>mass: <span>{mass}</span></p>
                <p>hair_color: <span>{hair_color}</span></p>
                <p>skin_color: <span>{skin_color}</span></p>
                <p>eye_color: <span>{eye_color}</span></p>
                <p>birth_year: <span>{birth_year}</span></p>
                <p>gender: <span>{gender}$</span></p>
                <p>
                    <button onClick={() => deleteProduct(this.props.id)} className='btn btn-danger delete-button'>x
                    </button>
                </p>
            </li>
        );
    }
}

export default ProductsItem;