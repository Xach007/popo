import React from 'react';
import { useState } from "react";
import "../styles/FooterSection.css";
import { faAngleRight, faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleSubmit = () => {
      if (email.trim() === "") {
        setError("Пожалуйста, введите ваш email!");
      } else if (!validateEmail(email)) {
        setError("Введите корректный email адрес!");
      } else {
        setError("");
        alert("Спасибо! Ваш email успешно принят.");
        setEmail("");
      }
    };
    const iconText = [
        {
            icon: faLocationDot,
            text: "52, Sanct Piterburg ",
            link: "https://maps.app.goo.gl/ZJGGL15ytNTMTUMMA"
        },
        {
            icon: faEnvelope,
            text: "krokodil22007@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&to=krokodil22007@gmail.com&su=Приветствие&body=Здравствуйте,%20я%20хочу%20обсудить%20вопрос."
        },
        {
            icon: faPhone,
            text: "+79163688896",
            link: "https://wa.me/79163688896?text=Здравствуйте!%20У%20меня%20есть%20вопрос."
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
            text: "Проект",
            link: "https://www.figma.com/design/wAUBw1v49CUCKA03Dp0DLk/сайт-по-настольному-теннису?node-id=99-818&t=JDHZgsaM9t3QdHa8-0"
        },
        {
            icon: faAngleRight,
            text: "О нас",
            link: "https://www.behance.net/1a25c9c8"
        },
        {
            icon: faAngleRight,
            text: "Блог",
            link: "https://rutube.ru/channel/49305230/"
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
                                        <p key={i} className='text-light'><a href={e.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FontAwesomeIcon className='me-2' icon={e.icon} style={{ color: "#ffd333", textDecoration: "none" }} />{e.text}</a></p>
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
                                            <li className='text-light my-2' key={i}>
                                                <a href={e.link} className="text-decoration-none text-light">
                                                    <FontAwesomeIcon className='me-2' icon={e.icon} />
                                                    {e.text}
                                                </a>
                                            </li>
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
                                    <input className='p-2 input-2' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ваш E-mail" />
                                    <button className="sign-btn" onClick={handleSubmit}>Оставить</button>
                                    {error && (
                                        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                                    )}
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
