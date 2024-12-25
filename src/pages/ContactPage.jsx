import React,{useState}from 'react';
import NavBar from '../components/NavBar';
import SecNavBar from '../components/SecNavBar';
import { useSelector } from 'react-redux';
import MainTitle from '../components/MainTitle';
import "../styles/ContactPage.css";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterSection from '../components/FooterSection';
import Carts from '../components/Carts';
import Favs from '../components/Favs';

const ContactPage = () => {
    const showCart = useSelector(state => state.CartUiSlice.cartIsVisible);
    const showFav = useSelector(state => state.FavouriteUiSlice.FavouriteIsVisible);

    const iconText = [
        {
            icon: faLocationDot,
            text: "52, Piter Sanct Piterbyrg",
            link: "https://maps.app.goo.gl/ZJGGL15ytNTMTUMMA"
        },
        {
            icon: faEnvelope,
            text: "Krokodil22007@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&to=krokodil22007@gmail.com&su=Приветствие&body=Здравствуйте,%20я%20хочу%20обсудить%20вопрос."
        },
        {
            icon: faPhone,
            text: "+79163688896",
            link: "https://wa.me/79163688896?text=Здравствуйте!%20У%20меня%20есть%20вопрос."
        },
    ];

    window.scrollTo({
        top: 0,
    });
    const [name, setName] = useState("");       // Имя
    const [email, setEmail] = useState("");     // E-mail
    const [topic, setTopic] = useState("");     // Тема
    const [message, setMessage] = useState(""); // Сообщение
  
    const handleButtonClick = () => {
      // Проверим, что все поля заполнены
      if (!name.trim()) {
        alert("Пожалуйста, укажите ваше имя.");
        return; // Прерываем выполнение функции
      }
  
      if (!email.trim()) {
        alert("Пожалуйста, укажите ваш email.");
        return;
      }
  
      // Простая проверка email на корректность
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Пожалуйста, укажите корректный email.");
        return;
      }
  
      if (!topic.trim()) {
        alert("Пожалуйста, укажите тему.");
        return;
      }
  
      if (!message.trim()) {
        alert("Пожалуйста, напишите сообщение.");
        return;
      }
  
      // Если все поля заполнены и email корректен
      alert(`Дорогой пользователь ${name} ваше сообщение отправлено! Мы свяжемся с вами по данной почте ${email} . Спасибо за образение.`);
  
      // Очистить все поля (обнуляем стейты)
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
    };

    return (
        <>
            <NavBar />
            <SecNavBar />
            {showCart && <Carts />}
            {showFav && <Favs />}
            <div className="contact mt-lg-2 pt-2">
                <div className="container">
                    <MainTitle title={"Контакты"} />
                    <div className="row">
                        <div className="col-lg-7">
                            <form>
                                <div className="content-1 p-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input className='w-100 p-2 mb-3' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ваше имя' required />
                                        </div>
                                        <div className="col-lg-12">
                                            <input className='w-100 p-2 mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ваш E-mail' required />
                                        </div>
                                        <div className="col-lg-12">
                                            <input className='w-100 p-2 mb-3' type="text" value={topic} onChange={(e)=> setTopic(e.target.value)} placeholder='Какая тема' required />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className='w-100 p-2 mb-2' type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Сообщение' required />
                                        </div>
                                    </div>
                                    <input className='send-btn px-3 py-2' type='button' onClick={handleButtonClick}  value={"Отправить сообщение"} />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="content-2 mb-4 p-4">
                                <iframe title='map' style={{ width: "100%", height: "250px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255811.36032671676!2d29.76505544912967!3d59.94000295493879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2sSt%20Petersburg%2C%20Russia!5e0!3m2!1sen!2sbd!4v1734313927780!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <div className="content-3 p-4">
                                {
                                    iconText.map((e, i) => (
                                        <p key={i} className='text-black-50'><a href={e.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FontAwesomeIcon className='me-2' icon={e.icon} style={{ color: "#ffd333", textDecoration: "none" }} />{e.text}</a></p>
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

export default ContactPage;
