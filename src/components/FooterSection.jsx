import React from 'react';
import "../styles/FooterSection.css";
import { faAngleRight, faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    const iconText = [
        {
            icon: faLocationDot,
            text: "52, Sanct Piterburg "
        },
        {
            icon: faEnvelope,
            text: "krasavchik22007@gmail.com"
        },
        {
            icon: faPhone,
            text: "+79163688888"
        },
    ];

    const quickShop = [
        {
            icon: faAngleRight,
            text: "Главная",
            path: "/home"
        },
        {
            icon: faAngleRight,
            text: "Товары",
            path: "/shop"
        },
        {
            icon: faAngleRight,
            text: "Корзина",
            path: "/cart"
        },
        {
            icon: faAngleRight,
            text: "Оформить заказ",
            path: "/cart"
        },
        {
            icon: faAngleRight,
            text: "Контакты",
            path: "/contact"
        },
    ];

    const aboutUs = [
        {
            icon: faAngleRight,
            text: "Проект"
        },
        {
            icon: faAngleRight,
            text: "О нас"
        },
        {
            icon: faAngleRight,
            text: "Блог"
        }
    ];

    const currentYear = new Date().getFullYear();
    const path = "https://github.com/Xach007";

    return (
        <>
            <div className="footer-section mb-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="footer-box mt-5">
                                <h4 className='text-light mb-2'>СВЯЗАТЬСЯ</h4>
                                <p className='text-light'>Если у вас вопросы по товару или по другой темме. Вы всегда можете обратиться к нам. </p>
                                {
                                    iconText.map((e, i) => (
                                        <p key={i} className='text-light'><FontAwesomeIcon className='me-2' icon={e.icon} style={{ color: "#ffd333", }} /> {e.text}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <div className="footer-box2 mt-5">
                                <h4 className='text-light mb-2'>СТРАНИЦЫ</h4>
                                <ul className='list-unstyled'>
                                    {
                                        quickShop.map((e, i) => (
                                            <Link className='text-decoration-none' to={e.path} key={i}><li className='text-light my-2'><FontAwesomeIcon className='me-2' icon={e.icon} /> {e.text}</li></Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <div className="footer-box2 mt-5">
                                <h4 className='text-light mb-2'>О НАС</h4>
                                <ul className='list-unstyled'>
                                    {
                                        aboutUs.map((e, i) => (
                                            <li className='text-light my-2'><FontAwesomeIcon className='me-2' icon={e.icon} /> {e.text}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer-box3 mt-5">
                                <h4 className='text-light mb-2'>ПОДДЕРЖКА</h4>
                                <p className='text-light'>Если вам нужен срочно ответ напиши те свой E-mail и наша поддрежка свяжется как можно бысрее.</p>
                                <div className="input-group mb-3">
                                    <input className='p-2 input-2' type="text" placeholder="Ваш E-mail" />
                                    <button className="sign-btn">Оставить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <p className='dev'><FontAwesomeIcon icon={faCopyright} /> {currentYear} Сделал <Link to={path} className='github-link text-decoration-none fw-bold'>Misharik</Link>. Написанно на React Router + RTK.</p>
                </div>
            </div>
        </>
    );
}

export default FooterSection;
