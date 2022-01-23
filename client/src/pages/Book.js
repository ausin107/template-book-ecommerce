import React from 'react';
import Navbar from '../components/Navbar';
import "./css/Book.css";
import { useState, useEffect } from 'react';
const book = {
    title: 'Con meo',
    coverImage: 'https://salt.tikicdn.com/cache/w1200/ts/product/8a/ac/49/e3f43953a1979fcb674dfdeffd05dfad.png',
    price: 50000,
    description: 'Con meo ne'
}

const Book = () => {
    const [state, setState] = useState(1)
    const { title, coverImage, price, description } = book;
    const handleIncrease = () => {
        setState(parseInt(state) + 1)
    }
    const handleDecrease = () => {

        state > 0 ? setState(parseInt(state) - 1) : setState(parseInt(state))
    }
    const onChange = (event) => {
        setState(event.target.value)
    }
    const handleAdd = () => {
        let product = JSON.parse(localStorage.getItem('cartItems')) || 0;
        product = (product.quantity == null) ? 0 : product.quantity
        const value = {
            name: title,
            quantity: parseInt(product) + parseInt(state)
        }
        localStorage.setItem('cartItems',JSON.stringify(value))
    }
    return (
        <div>
            <Navbar />
            <div className="super_container">
                <div className="single_product">
                    <div className="container-fluid" style={{ backgroundColor: '#fff', padding: '75px' }}>
                        <div className="row">
                            <div className="col-lg-4 order-lg-2 order-1">
                                <div className="image_selected"><img src={coverImage} alt="coverImage" /></div>
                            </div>
                            <div className="col-lg-8 order-3">
                                <div className="product_description">
                                    <div className="product_name">{title}</div>
                                    <div> <span className="product_price">{price}đ</span></div>
                                    <div> <span className="product_saved">In Stock</span> <span style={{ color: 'black' }}><span> </span></span></div>
                                    <hr className="singleline" />
                                    <div className="row row-underline">
                                        <div className="col-md-6"> <span className=" deal-text">Description</span> </div>
                                        <div className="col-md-6"> <a href="#" data-abc="true"> <span className="ml-auto view-all" /> </a> </div>
                                    </div>
                                    <div className="row lh-35">
                                        <div className='col-md-12'>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline " />
                                <div className="order_info d-flex flex-row">
                                    <form action="#">
                                    </form></div>
                                <div className="row">
                                    <div className="col-xs-6" style={{ marginLeft: '13px' }}>
                                        <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" value={state} onChange={onChange} />
                                            <div className="quantity_buttons">
                                                <div id="quantity_inc_button" className="quantity_inc quantity_control" onClick={handleIncrease}><i className="fas fa-chevron-up" /></div>
                                                <div id="quantity_dec_button" className="quantity_dec quantity_control" onClick={handleDecrease}><i className="fas fa-chevron-down" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6"> <button type="button" className="btn btn-success shop-button" onClick={handleAdd}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;