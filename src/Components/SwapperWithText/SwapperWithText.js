import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import "./SwapperWithText.css";
import img15 from "../../images/15.jpeg";
import img16 from "../../images/16.webp";
import img17 from "../../images/17.jpeg";
import img18 from "../../images/18.jpeg";
import img19 from "../../images/19.jpeg";
import img20 from "../../images/20.jpeg";

const images = [
  {
    id: 1,
    image: img15,
    text: "مشروعات متطورة في الساحل الشمالي عام 2024",
    propertiesForSale: 429,
    propertiesForRent: 15,
    companyName: "اسم الشركة 1",
  },
  {
    id: 2,
    image: img16,
    text: "أفضل الكومبوندات في الساحل الشمالي لمصايف الصيفي",
    propertiesForSale: 320,
    propertiesForRent: 10,
    companyName: "اسم الشركة 2",
  },
  {
    id: 3,
    image: img17,
    text: "الاستثمار في العقارات: أفضل الأماكن في مصر",
    propertiesForSale: 540,
    propertiesForRent: 20,
    companyName: "اسم الشركة 3",
  },
  {
    id: 4,
    image: img18,
    text: "شقق مطلة على نهر النيل: اختيار الموقع المناسب",
    propertiesForSale: 210,
    propertiesForRent: 5,
    companyName: "اسم الشركة 4",
  },
  {
    id: 5,
    image: img19,
    text: "مشروعات متطورة في الساحل الشمالي عام 2024",
    propertiesForSale: 429,
    propertiesForRent: 15,
    companyName: "اسم الشركة 5",
  },
  {
    id: 6,
    image: img20,
    text: "شقق مطلة على نهر النيل: اختيار الموقع المناسب",
    propertiesForSale: 210,
    propertiesForRent: 5,
    companyName: "اسم الشركة 6",
  },
];

const SwapperWithText = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (card) => {
    navigate(`/companyDetailes/${card.id}`, { state: { 
      companyName: card.companyName,
      propertiesForSale: card.propertiesForSale,
      propertiesForRent: card.propertiesForRent
    }});
  };

  return (
    <div className="container my-5">
      <h2 className="text-center my-5 h1">الشركات العقارية المميزة</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="p-2"
      >
        {images.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="card"
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={card.image} alt={card.text} />
              {hoveredCard === card.id && (
                <div className="overlay">
                  <h3 style={{ color: '#007bff' }}>{card.companyName}</h3>
                  <div className="parentTwoChild">
                    <p><span>{card.propertiesForSale}</span> : عقار للبيع </p>
                    <p><span>{card.propertiesForRent}</span> : عقار للايجار</p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwapperWithText;
