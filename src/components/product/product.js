import React, {Component} from 'react';
import './products.css'
import PaginationPeople from "../pagination/PaginationPeople";
import ProductsItem from "../ProductItem/productItem";

class Products extends Component {
    componentDidMount() {
        this.getPage()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.getPage()
        }
    }

    getPage = () => {
        const {page} = this.props
        this.props.getProduct(page)
    }


    render() {
        return (
            <section>
                <h2>Products</h2>
                <PaginationPeople page={this.props.page} count={this.props.data.count}/>
                <ul className="row products">
                    {this.props.data.results.map((item) => (
                        <ProductsItem key={item.name} {...item} deleteProduct={this.props.deleteProduct}/>
                    ))}
                </ul>
                <PaginationPeople page={this.props.page} count={this.props.data.count}/>
            </section>
        );
    }
}

const mapStateToProps = ({data}) => {
    return {data}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct: this.getProduct(dispatch),
        deleteProduct: this.deleteProduct(dispatch)
    }
}


function connect(mapStateToProps, mapActionsToProps) {
    
}

export default connect(mapStateToProps, mapActionsToProps)(Products);