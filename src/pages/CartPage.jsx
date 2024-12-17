import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/CartPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import FormatCurrency from '../FormatCurrency';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Tr from '../components/Tr';
import Favs from '../components/Favs';

const CartPage = () => {
    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    const cart = useSelector(state => state.CartSlice.cartItems);

    const shipping = 650;

    const dispatch = useDispatch();

    const checkoutActive = useRef(null);
    const checkProceed = useRef(null);

    const checkActive = () => {
        if (cart.length === 0) {
            checkProceed.current.classList.add("disable");
        } else {
            checkProceed.current.classList.remove("disable");
            checkoutActive.current.classList.add("checkActive");
        }
    }

    const closeCheck = () => {
        checkoutActive.current.classList.remove("checkActive");
    }

    window.scrollTo({
        top: 0,
    });

    const totalAmount = useSelector(state => state.CartSlice.totalAmount);

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="cart-page mt-lg-2 pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <table className=''>
                                <thead>
                                    <tr className='tr-1 text-light'>
                                        <th className="p-2 px-lg-3">Товары</th>
                                        <th className="p-2 px-lg-3">Цена</th>
                                        <th className="p-2 px-lg-3">Количество</th>
                                        <th className="p-2 px-lg-3">Удалить</th>
                                    </tr>
                                </thead>
                                {
                                    cart && cart.length > 0 ? (
                                        <tbody>
                                            {
                                                cart.map((product) => (
                                                    <Tr product={product} key={product.id} />
                                                ))
                                            }
                                        </tbody>
                                    ) : cart.length === 0 && <h3 className='empty text-center text-black-50'>Нету товаров в корзине</h3>
                                }
                            </table>
                        </div>
                        <div className="col-lg-3 col-md-12" id='summary-col'>
                            <h4 className='cart-sum'>Итог</h4>
                            <div className="summary-box p-4">
                                <div className="first d-flex justify-content-between">
                                    <p className='fw-bold'>Общая стоимость</p>
                                    <p className='fw-bold'>{FormatCurrency(totalAmount)}</p>
                                </div>
                                <div className="second d-flex justify-content-between">
                                    <p className='fw-bold'>Доставка</p>
                                    <p className='fw-bold'>{FormatCurrency(shipping)}</p>
                                </div>
                                <div className="third d-flex justify-content-between align-items-center mb-2">
                                    <p className='fw-bold fs-4'>Итоговая сумма</p>
                                    <p className='fw-bold fs-5'>{FormatCurrency(totalAmount + shipping)}</p>
                                </div>
                                <button ref={checkProceed} onClick={checkActive} className='check-btn p-3 w-100 fw-bold'>Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={checkoutActive} className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="checkout-box text-center p-4">
                                    <div className="billing p-2 d-flex w-100">
                                        <h4>Платежный адрес</h4>
                                        <button onClick={closeCheck} className='close-check fs-4'><FontAwesomeIcon icon={faXmark} /></button>
                                    </div>
                                    <form className='text-light mt-5'>
                                        <div className="row">
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Имя</label>
                                                        <input required className='input-text p-2' type="text" placeholder='Введите имя' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Фамилия</label>
                                                        <input required className='input-text p-2' type="text" placeholder='Введите фамилию' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>E-mail</label>
                                                        <input required className='input-text p-2' type="email" placeholder='example@email.com' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Номер телефона</label>
                                                        <input required className='input-text p-2' type='text' maxLength={9} placeholder='+79163688888' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Улица</label>
                                                        <input required className='input-text p-2' type="text" placeholder='Шахова' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Дом</label>
                                                        <input required className='input-text p-2' type="text" placeholder='52' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Регион</label>
                                                        <input required className='input-text p-2' type="text" placeholder='Москвовкая область' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Город</label>
                                                        <input required className='input-text p-2' type="text" placeholder='Домодедово' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-smbox d-flex justify-content-between mb-1">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Этаж</label>
                                                        <input required className='input-text p-2' type="text" placeholder='6' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className='d-flex flex-column'>
                                                        <label>Подьезд</label>
                                                        <input required className='input-text p-2' type="text" placeholder='1'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="check-box d-flex flex-column mb-1 mt-1">
                                                <div className='mb-2'>
                                                    <input type="checkbox" /> <span>Создать аккаунт</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" /> <span>Сохранить данный аккаунт</span>
                                                </div>
                                            </div>
                                            <input type='submit' className='check-btn2 p-3 w-100 fw-bold' value='Отправить' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default CartPage;
