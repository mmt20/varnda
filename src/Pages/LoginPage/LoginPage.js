import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LoginPage.css';
import { Link } from 'react-router-dom';
export default function LoginPage() {
  return (
    <Container className="login-container mt-5" dir="rtl">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <h2 className="text-center mb-4" style={{color:"#007bff"}}>تسجيل الدخول</h2>
          <Form className="p-4 border rounded">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="fs-5 mb-3">البريد الإلكتروني</Form.Label>
              <Form.Control type="email" placeholder="ادخل البريد الإلكتروني" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label className="fs-5 mb-3">كلمة المرور</Form.Label>
              <Form.Control type="password" placeholder="ادخل كلمة المرور" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              تسجيل الدخول
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Button variant="light" className="google-button w-100">
              تسجيل الدخول باستخدام جوجل
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            </Button>
          </div>

          <div className="text-center mt-3">
            <Link to="/signup">ليس لديك حساب؟ سجل هنا</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
