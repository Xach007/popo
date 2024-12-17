import React from 'react';
import { useDispatch } from 'react-redux';
import FormatCurrency from '../FormatCurrency';
import { FavouriteActions } from '../rtk/Slices/FavouriteSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { cartActions } from '../rtk/Slices/CartSlice';

const FavouriteSlide = ({ product }) => {
    const dispatch = useDispatch();

    const { id, title, thumbnail, price } = product;

    const addToCart = () => {
        dispatch(cartActions.addToCart({
            id,
            title,
            thumbnail,
            price
        }));
    }

    const deleteFav = () => {
        dispatch(FavouriteActions.deleteFav(id));
    }

    return (
        <div className="fav-slide">
            <div className="container">
                <div className="product-favbox">
                    <>
                        <div className="fav-box mt-5 d-flex justify-content-between align-items-center mb-2">
                            <img className='product-cartimage' src={thumbnail} alt="product-img" />
                            <div className="title-price d-flex flex-column">
                                <span className='text-black-50'>{title}</span>
                                <span><span className='price'>Цена:</span> {FormatCurrency(price)}</span>
                            </div>
                        </div>
                        <div className="btn-box d-flex justify-content-between">
                            <button className='del-btn rounded p-2 mt-3 w-75 fw-bold mb-2' onClick={deleteFav}>Удалить</button>
                            <button className='fav-btn rounded p-2 mt-3 fw-bold mb-2' onClick={addToCart}><FontAwesomeIcon className='fs-4 fav-icon' icon={faCartShopping} /></button>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}

export default FavouriteSlide;
