import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import "../styles/Shop.css";
import Products from '../components/Products';
import products from '../assets/products';
import { useSelector } from 'react-redux';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Favs from '../components/Favs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const filterPrice = [
        {
            text1: "Лучшее качество",
        },
        {
            text1: "Быстрая доставка",
        },
        {
            text1: "Низкие цены",

        },
        {
            text1: "Множество товаров",

        },
        {
            text1: "Дружелюбныя поддержка",

        },
        {
            text1: "Долгая гарантия",

        }
    ];

    const [product] = useState(products);

    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    window.scrollTo({
        top: 0,
    });

    const [inputSearch, setInputSearch] = useState("");

    const handleSearch = (e) => {
        setInputSearch(e.target.value);
    }

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(inputSearch.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="shop mt-4 pt-2">
                <div className="container">
                    <form className="d-flex search-form mb-2 mt-lg-3 ms-auto" role="search">
                        <div className="input-group">
                            <input type="text" value={inputSearch} onChange={handleSearch} className="form-control input-search" placeholder="Найти товар" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffd333", }} /></span>
                        </div>
                    </form>
                    <div className="row" id='shop-row'>
                        <div className="col-lg-3 col-md-12">
                            <div className="filter-price">
                                <h4 className='filter-title'>Почему мы </h4>
                                <div className="filter-box p-2">
                                    <ul className='list-unstyled'>
                                        {
                                            filterPrice.map((e, i) => (
                                                <li className='d-flex justify-content-between text-black-50 my-2' key={i}><p className='me-2' /><span className='me-auto'>{e.text1}</span> <span>{e.text2}</span></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {
                                        filteredProducts.map((product) => (
                                            <div className="col-lg-4 mt-4" key={product.id}>
                                                <Products product={product} />
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default Shop;
