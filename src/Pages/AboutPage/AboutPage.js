import React from "react";
import "./AboutPage.css";
import Header from "../../Components/Header/Header";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import about_1 from "../../images/About_1.png";
import about_2 from "../../images/About_2.jpeg";
import about_3 from "../../images/About_3.jpeg";
import about_4 from "../../images/About_4.jpeg";
import about_5 from "../../images/About_5.jpeg";
import Footer from "../../Components/Footer/Footer";
export default function AboutPage() {
  return (
    <>
      <Header />
      <Container>
        <Row className="d-flex justify-content-around align-items-center my-5">
          <Col md={5} className="d-flex justify-content-center">
            <img src={about_1} alt="" className="image-about" />
          </Col>

          <Col md={5} dir="rtl">
            <h3 className="h1 title-about">نبذة عنا</h3>
            <p className="fs-5 mt-4 about-text">
              بيوت هى منصة الإعلانات المبوبة الرائدة للعقارات في مصر، هدفها
              الأساسي هو الربط بين المشترين والمستثمرين وأصحاب العقارات
              والبائعين والمستأجرين والوسطاء لتسهيل عملية البحث عن العقارات. لأن
              عملية البحث عن العقارات عملية مرهقة وتحتاج إلى كثير من الوقت
              والمجهود، نقدم لكم تجربة عقارية سهلة و مميزة تجعلك تبحث عن العقار
              المناسب لك سواء للإيجار، البيع أو الشراء كل ذلك من خلال منصة واحدة
              فقط نبذة عن بيوت بيوت هى شركة ناشئة ممولة بحجم استثمارات يصل ل 500
              مليون دولار من مستثمرين معروفين زي Affinity Partners و Acacia
              Partners و Naspers و KCK group و Exor، وده بيخليها واحدة من أهم
              الشركات في صناعة الإعلانات المبوبة العالمية.
            </p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-around align-items-center my-5">
          <Col md={5} dir="rtl">
            <h3 className="h1">اتعرف على حيدر علي خان</h3>
            <h5 className="h4 my-4 title-about">المدير التنفيذي لشركة بيوت و دوبيزل، و رئيس شركة دوبيزل جروب القابضة المحدودة في الشرق الأوسط.</h5>
            <p className="fs-5 about-text">انتقل حيدر علي خان من الولايات المتحدة الأمريكية على الإمارات سنة 2014 كمدير تنفيذي لمنصة العقارات الرائدة Bayut.com، وهو عنده خبرة أكتر من 15 سنة في إدارة مؤسسات تكنولوجية كبيرة، وله دور فعال في تطوير وتوسيع بيوت في جميع أنحاء المنطقة من خلال ابتكاراته و ارشاداته التكنولوجية اللي حولت بيوت لشركة قوية في المنطقة. غير ان الشركة حققت برئاسته نسبة أرباح قياسية و عملائها كبروا سنة ورا التانية</p>
          </Col>
          <Col md={5} dir="rtl">
          <img src={about_2} alt="" className="image-about" />
          </Col>
        </Row>

        <Row className="my-5">
          <h4 className="text-center h2 title-about">قيمنا</h4>
          <p dir="rtl" className=" my-4 about-text">قيمنا نحن في بيوت حريصين على تلبية احتياجات كل من المواطنين و الوافدين من كل أنحاء العالم لتسهيل عملية البحث عن العقارات في المنطقة، قدرنا نحقق ده من خلال دراسة السوق على نطاق واسع و ركزنا على إيجاد حلول تسهل على الباحثين عن عقارات إيجاد كل ما يناسبهم سواء أفراد أو وكلاء. شركتنا تتبنى قيم أساسية زي المصداقية والابتكار وتحمل المسئولية الكاملة في تحقيق احتياجات العملاء وهدفنا الأساسي هو الإرتقاء بمستوى السوق في المنطقة.</p>

          <Col md={4}>
          <img src={about_3} alt="" className="image-about m-2" />
          </Col>
          <Col md={4}>
          <img src={about_4} alt="" className="image-about m-2" />
          </Col>
          <Col md={4}>
          <img src={about_5} alt="" className="image-about m-2" />
          </Col>
        </Row>
      </Container>
        <Footer />
    </>
  );
}
