import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import { useDispatch, useSelector } from 'react-redux';
import products from '../assets/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import FormatCurrency from '../FormatCurrency';
import "../styles/ProductDetails.css";
import { FavouriteActions } from '../rtk/Slices/FavouriteSlice';
import { useEffect, useRef, useState } from 'react';
import FooterSection from '../components/FooterSection';
import { cartActions } from '../rtk/Slices/CartSlice';
import Carts from '../components/Carts';
import Favs from '../components/Favs';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === id);

    const { title, price, thumbnail, description, rating, images, quantity } = product;

    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.CartSlice.cartItems);

    const [previewImage, setPreviewImage] = useState(thumbnail);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        setPreviewImage(thumbnail);
    }, [product])

    const decreaseBtn = useRef(null);


    const addToCart = () => {
        dispatch(cartActions.addToCart({
            id,
            title,
            thumbnail,
            price
        }));
    }

    const addToFav = () => {
        dispatch(FavouriteActions.addToFav({
            id,
            title,
            thumbnail,
            price
        }));
    }

    const decreaseQuantity = () => {
        dispatch(cartActions.decreaseProduct(id));
    }

    const totalQuantity = useSelector(state => state.CartSlice.totalQuantity);

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div div className="product-details" >
                <div className="container details-content mt-4">
                    <div className="row" id='details-row'>
                        <div className="preview-container col-lg-6 col-md-12 mb-4">
                            <img className='preview-image img-fluid w-100' src={previewImage} alt="product-img" />
                            <div className="row mt-2">
                                <div id='img-column' className="col-lg-4 col-md-4">
                                    <div className='small-container text-center' onClick={() => setPreviewImage(images[0])}>
                                        <img className='small-image w-100 me-4' src={images[0]} alt="" />
                                    </div>
                                </div>
                                <div id='img-column' className="col-lg-4 col-md-4">
                                    <div className='small-container text-center' onClick={() => setPreviewImage(images[1])}>
                                        <img className='small-image w-100 me-4' src={images[1]} alt="" />
                                    </div>
                                </div>
                                <div id='img-column' className="col-lg-4 col-md-4">
                                    <div className='small-container text-center' onClick={() => setPreviewImage(images[2])}>
                                        <img className='small-image w-100 me-4' src={images[2]} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h1 className='title-detail'>{title}</h1>
                            <p><FontAwesomeIcon icon={faStar} style={{ color: "#fdd333", }} /> {rating}</p>
                            <p className='price-detail fs-3 fw-bold'>{FormatCurrency(price)}</p>
                            <p className='desc-detail'>{description}</p>
                            <div className="action-detail-btn mt-3">
                                <button onClick={addToFav} className='disable cart-btn3 me-4 p-2'><FontAwesomeIcon className='cart-icon-3 fs-4' icon={faHeart} />В избранное</button>
                                <button onClick={addToCart} className='fav-btn3 p-2'><FontAwesomeIcon className='fav-icon3 fs-4' icon={faCartShopping} />В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default ProductDetails;
