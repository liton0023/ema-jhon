import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { name, img, ratings, seller, price } = props.product;
    // console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:$ {price}</p>
                <p><small>Seller:{seller}</small></p>
                <p>Ratings:{ratings} sters</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;