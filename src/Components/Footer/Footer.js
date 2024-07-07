import React, { useState, useEffect, useMemo } from 'react';
import "./Footer.css";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import img1 from '../../images/الاردن.svg';
import img2 from '../../images/الامارات.svg';
import img3 from '../../images/السعودية.svg';
import img4 from '../../images/باكستان.svg';
import img5 from '../../images/عمان.svg';
import img6 from '../../images/مصر.svg';

export default function Footer() {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "مصر",
    img: img6
  });

  const navigate = useNavigate();
  const location = useLocation();

  const countries = useMemo(() => [
    { name: "مصر", img: img6, path: "/" },
    { name: "السعودية", img: img3, path: "/sauidiArabia" },
    { name: "الامارات", img: img2, path: "/uae" },
    { name: "عمان", img: img5, path: "/oman" },
    { name: "باكستان", img: img4, path: "/pakistan" },
    { name: "الاردن", img: img1, path: "/jordan" },
  ], []);

  useEffect(() => {
    const currentCountry = countries.find(country => country.path === location.pathname);
    if (currentCountry) {
      setSelectedCountry(currentCountry);
    }
  }, [location.pathname, countries]);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    navigate(country.path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-3 footer p-3">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <Link to="#" className=" ms-2 fs-3 icon-social" style={{width:"45px"}}>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link to="#" className=" ms-2 fs-3 icon-social">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="#" className=" ms-2 fs-3 icon-social">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="#" className=" ms-2 fs-3 icon-social">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </Col>

          <Col md={5} dir="rtl">
            <div className="footer-links mb-3">
              <Link to="/aboutUs" className=" ms-3 fs-5 link">
                نبذه عنا{' '}
              </Link>
              <Link to="/contactUs" className=" ms-3 fs-5 link">
                اتصل بنا
              </Link>
              <Link to="/terms" className=" ms-3 fs-5 link">
                سياسة الخصوصية و الشروط
              </Link>
              <div className="d-flex justify-content-start align-items-center mt-3">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="الدول"
                  className="text-white ms-3 fs-5"
                >
                  {countries.map((country, index) => (
                    <Dropdown.Item
                      key={index}
                      href="#"
                      className="d-flex justify-content-around align-items-center"
                      onClick={() => handleSelect(country)}
                    >
                      <img src={country.img} alt={country.name} className="ms-2" width="20" />
                      <span className="nameCountry">{country.name}</span>
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <span className=" ms-3 fs-5 nameCountry">
                  <img src={selectedCountry.img} alt={selectedCountry.name} width="20" className="ms-2" />
                  {selectedCountry.name}
                </span>
              </div>
            </div>
            <h5>© 2008 - 2024 Bayut.eg المنصة العقارية في مصر</h5>
          </Col>
        </Row>
        <div className="scroll-to-top">
          <button onClick={scrollToTop} className="btn btn-primary">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </Container>
    </div>
  );
}
