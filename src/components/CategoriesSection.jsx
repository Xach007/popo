import React from 'react'
import MainTitle from './MainTitle';
import CatImg_1 from "../imgs/cat-img/cat-1.jpg";
import CatImg_3 from "../imgs/cat-img/cat-3.jpg";
import CatImg_4 from "../imgs/cat-img/cat-4.jpg";
import CatImg_5 from "../imgs/cat-img/cat-5.jpg";
import "../styles/CategoriesSection.css";
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
    const categories = [
        {
            category: "Мячи",
            amount: "11 Товаров",
            image: CatImg_5
        },
        {
            category: "Сумки",
            amount: "12 Товаров",
            image: CatImg_1
        },
        {
            category: "Кроссовки",
            amount: "12 Товаров",
            image: CatImg_3
        },
        {
            category: "Ракетки",
            amount: "16 Товаров",
            image: CatImg_4
        },
        {
            category: "Ракетки",
            amount: "16 Товаров",
            image: CatImg_4
        },
        {
            category: "Кроссовки",
            amount: "12 Товаров",
            image: CatImg_3
        },
        {
            category: "Сумки",
            amount: "12 Товаров",
            image: CatImg_1
        },
        {
            category: "Мячи",
            amount: "11 Товаров",
            image: CatImg_5
        },
        {
            category: "Мячи",
            amount: "11 Товаров",
            image: CatImg_5
        },
        {
            category: "Сумки",
            amount: "12 Товаров",
            image: CatImg_1
        },
        {
            category: "Кроссовки",
            amount: "12 Товаров",
            image: CatImg_3
        },
        {
            category: "Ракетки",
            amount: "16 Товаров",
            image: CatImg_4
        },
    ];

    return (
        <div className="category-section mt-5 mb-5">
            <div className="container">
                <MainTitle title={"Категории"} />
                <div className="row">
                    {
                        categories.map((cat, i) => (
                            <div className="col-lg-3 my-2" key={i}>
                                <Link className='cat-link text-decoration-none' to={`/product/${cat.category}`}>
                                    <div className="cat-box d-flex align-items-center justify-content-around">
                                        <div className='overflow-hidden'>
                                            <img src={cat.image} className='img-fluid cat-img' alt="" />
                                        </div>
                                        <div className="text-box py-3 w-100">
                                            <p>{cat.category}</p>
                                            <p className='text-black-50 amount'>{cat.amount}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoriesSection;
