import React , { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

class Products extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        
        const response = await api.get(`/products/${id}`);
        
        this.setState( {product: response.data });

        //console.log(this.state.product);
    }
    render(){
        const { product } = this.state
        
        return (
            <>
            <header id='main-header'>
                <Link id= 'js_hunt' to={'/'}>JSHunt</Link>
            </header>
            <div className='product-info'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>

            </div>
            </>
        )
    }
}

export default Products;