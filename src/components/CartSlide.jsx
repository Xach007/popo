import React from 'react';
import { useDispatch } from 'react-redux';
import FormatCurrency from '../FormatCurrency';
import { cartActions } from '../rtk/Slices/CartSlice';

const CartSlide = ({ product }) => {
    const dispatch = useDispatch();

    const { id, title, thumbnail, price, quantity, totalPrice } = product;

    const increamentProduct = () => {
        dispatch(cartActions.addToCart({
            id,
            title,
            thumbnail,
            price
        }));
    }

    const decreaseQuantity = () => {
        dispatch(cartActions.decreaseProduct(id));
    }

    const deleteProduct = () => {
        dispatch(cartActions.deleteProduct(id));
    }

    return (
        <div className="cart-slide">
            <div className="container">
                <div className="cart-box">
                    <div className="big-box mb-3">
                        <div className="product-cart d-flex align-items-center justify-content-between">
                            <img className='product-cartimage' src={thumbnail} alt="" />
                            <div className="cart-text d-flex flex-column">
                                <span className='text-black-50'>{title}</span>
                                <span><span className='price'>Цена:</span> {FormatCurrency(totalPrice)}</span>
                            </div>
                        </div>
                        <div className="quantity-box d-flex justify-content-around align-items-center mt-3">
                            <button className='increase-btn rounded fs-4 fw-bold' onClick={increamentProduct}>+</button>
                            <span className='fs-4 fw-bold text-black-50'>{quantity}</span>
                            <button className='decrease-btn rounded fs-4 fw-bold' onClick={decreaseQuantity}>-</button>
                        </div>
                        <button className='del-btn rounded p-2 mt-3 w-100 fw-bold' onClick={deleteProduct}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSlide;
