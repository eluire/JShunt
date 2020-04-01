import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';
class Main extends Component {

    state = {
        products : [],
        product_info: {},
        page: 1
    };
    componentDidMount() {
        this.load_products();
    }

    load_products = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...product_info } = response.data;
    
        this.setState({ products: docs, product_info, page }) 
    }

    prev_page = () => {
        const { page } = this.state;

        if(page === 1) return;

        const page_number = page -1;

        this.load_products(page_number);
    }

    next_page = () =>{
        const { page, product_info} = this.state;

        if(page === product_info.pages) return;

        const page_number = page + 1;

        this.load_products(page_number);
    }
    render(){
        const { products, page, product_info} = this.state;
        return(
            <>
            <header id='main-header'>
                <Link id= 'js_hunt' to={'/'}>JSHunt</Link>
            </header>
            <div className ="product-list">
                {products.map(p => {
                    return(
                    <article key={p._id}>
                        <strong>{p.title}</strong>
                        <p>{p.description}</p>

                        <Link to={`products/${p._id}`}>Acessar</Link>
                    </article>
                    );
                }
                )}
                <div className= 'actions'>
                    <button disabled={ page === 1 }onClick={this.prev_page}>Anterior</button>
                    <button disabled={ page === product_info.pages }onClick={this.next_page}>Próximo</button>
                </div>
            </div>
            </>
        );
    }
}

export default Main;