import React from 'react';
import imgCarousel_1 from "../../src/imgs/carousel-img/carousel-1.jpg";
import imgCarousel_2 from "../../src/imgs/carousel-img/carousel-2.jpg";
import imgCarousel_3 from "../../src/imgs/carousel-img/carousel-3.jpg";
import offerImg_2 from "../../src/imgs/offer-img/offer-2.jpg";
import offerImg_3 from "../../src/imgs/offer-img/offer-3.jpg";
import "../styles/LandingSection.css";
import { Link } from 'react-router-dom';

const LandingSection = () => {
    const offerImgs = [
        {
            img: offerImg_2,
            text_1: "Скидка 20%",
            text_2: "Только сегодня",
            btn: "Товары",
            path: "/Shop"
        },
        {
            img: offerImg_3,
            text_1: "Купи со скидкой 20%",
            text_2: "Ограниценно",
            btn: "Товары",
            path: "/Shop"
        },
    ];

    return (
        <div className="landing-section mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators mb-2">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={imgCarousel_1} class="carousel-img d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1>Качество</h1>
                                        <p>Наши веши из натуральных матерьялов, легко дышешюи и стильные</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={imgCarousel_2} class="carousel-img d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1>Надежность</h1>
                                        <p>За надежность наших ракеток можно не переживать. Они привозяться напрямую из за вода и каждая рокатка проходит проверку.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={imgCarousel_3} class="carousel-img d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1>Цена</h1>
                                        <p>Цена ниже среднего не из за того что мы хотим продать не качественную продукцию, а хотим дать людям за теже деньги лучше качества.</p>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" id='col-2'>
                        {
                            offerImgs.map((e, i) => (
                                <div className="box" key={i}>
                                    <div className="img-1 mb-2">
                                        <img className='offer-img' src={e.img} alt="offer" />
                                        <div className="text text-center text-light d-flex flex-column">
                                            <span>{e.text_1}</span>
                                            <span className='fw-bold fs-4'>{e.text_2}</span>
                                            <Link to={e.path}><button className='shop-btn px-3 py-1'>{e.btn}</button></Link>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection;
