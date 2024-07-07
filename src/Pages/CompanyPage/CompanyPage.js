import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./CompanyPage.css";
import SwapperWithText from "../../Components/SwapperWithText/SwapperWithText";
import img15 from "../../images/15.jpeg";
import img16 from "../../images/16.webp";
import img17 from "../../images/17.jpeg";
import img18 from "../../images/18.jpeg";
import img19 from "../../images/19.jpeg";
import img20 from "../../images/20.jpeg";
// //////////////////////
import imgcompany1 from "../../images/com1_new.webp";
import imgcompany2 from "../../images/com2_new.webp";
import imgcompany3 from "../../images/com3_new.webp";
import imgcompany4 from "../../images/com4_new.webp";
import imgcompany5 from "../../images/com5_new.webp";
import imgcompany6 from "../../images/com6_new.webp";
import imgcompany7 from "../../images/com7_new.webp";
import imgcompany8 from "../../images/com8_new.webp";
export default function CompanyPage() {
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
  return (
    <>
      <Header />
      <Container dir="rtl">
        <Form className="w-100">
          <Row className="my-3">
            <Form.Group as={Col} xs={12} lg={5}>
              <Form.Control type="text" placeholder="أدخل الموقع " />
            </Form.Group>
            <Form.Group as={Col} xs={12} lg={5}>
              <Form.Control type="text" placeholder="اسم الوكالة  " />
            </Form.Group>

            <Form.Group as={Col} xs={12} lg={2}>
              <Button variant="primary" className="w-100">
                ابحث
              </Button>
            </Form.Group>
          </Row>
        </Form>

        <h2 className="company-h2 mt-4 mb-3">الوكالات المميزة (مصر)</h2>
        <p className="company-p">اختر العقار المناسب بمساعدة الخبراء</p>
        <SwapperWithText images={images} />

        <h2 className="company-h2 mt-4 mb-3">
          تصفح الوكالات العقارية وفقاً للإمارة
        </h2>
        <p className="company-p">
          مشاهدة الوكالات العقارية التي تعمل في إمارة أو منطقة معينة فقط
        </p>

        <Row className="my-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={imgcompany1} />
              <Card.Body>
                <Card.Title>القاهرة الجديدة</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={imgcompany2} />
              <Card.Body>
                <Card.Title>الشيخ زايد </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img variant="top" src={imgcompany3} />
              <Card.Body>
                <Card.Title>مصر الجديدة </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img variant="top" src={imgcompany4} />
              <Card.Body>
                <Card.Title>مدينة نصر </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={imgcompany5} />
              <Card.Body>
                <Card.Title> 6 أكتوبر</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={imgcompany6} />
              <Card.Body>
                <Card.Title> المعادى </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img variant="top" src={imgcompany7} />
              <Card.Body>
                <Card.Title>مدينتى  </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Img variant="top" src={imgcompany8} />
              <Card.Body>
                <Card.Title> سموحة </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
