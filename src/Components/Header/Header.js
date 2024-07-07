import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faStar,
  faHeart,
  faCog,
  faGlobe,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header style={headerStyle}>
        <div style={leftStyle}>
          <Link to="/login" style={{ color: '#123', textDecoration: 'none' }}>
            <div className="icon me-3">

              <FontAwesomeIcon icon={faSignInAlt} className="ms-2" />   تسجيل الدخول
            </div>
          </Link>
          <div className="icon me-3">
            <FontAwesomeIcon icon={faStar} className="ms-2" />  البحث المحفوظ
          </div>
          <Link to="/fav" style={{ color: '#123', textDecoration: 'none' }}>

            <div className="icon me-3">
              <FontAwesomeIcon icon={faHeart} className="ms-2" />  المفضلة
            </div>
          </Link>
        </div>
        <div style={rightStyle}>
          <Link
            to="/submit-property"
            style={{ color: '#123', textDecoration: 'none' }}
          >
            <div className="icon me-3">
              <FontAwesomeIcon icon={faPlus} className="ms-2" /> اضف عقار
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
};

const leftStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
};

const rightStyle = {
  display: 'flex',
  alignItems: 'center',
};
