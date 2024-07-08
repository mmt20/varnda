import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './SubmitpropertyPage.module.css';

import image1 from '../../images/image1.jpeg';
import image2 from '../../images/image2.jpeg';
import image3 from '../../images/image3.jpeg';
import image4 from '../../images/image4.jpeg';
import image5 from '../../images/image5.jpeg';
import image6 from '../../images/image6.jpeg';
import image7 from '../../images/image7.jpeg';
import image8 from '../../images/image8.jpeg';
import image9 from '../../images/image9.jpeg';

function SubmitpropertyPage() {
  // Array containing property cards data
  const propertyCards = [
    {
      image: image1,
      alt: 'شقق و دوبلكس',
      title: 'شقق و دوبلكس',
      description: 'شقة، دوبلكس، بنتهاوس، ستوديو، غرفة، سرير',
      link: '/add-apartments-duplexes',
    },
    {
      image: image2,
      alt: 'فلل وقصور',
      title: 'فلل وقصور',
      description: 'شقة، دوبلكس، بنتهاوس، ستوديو، غرفة، سرير',
      link: '/add-villas-palaces',
    },
    {
      image: image3,
      alt: 'منازل وبيوت',
      title: 'منازل وبيوت',
      description: 'منازل وبيوت',
      link: '/add-home-property',
    },
    {
      image: image4,
      alt: 'مصايف وساحلي',
      title: 'مصايف وساحلي',
      description: 'شاليه، دوبلكس، بنتهاوس، ستديو، فيلا، توين وتاون هاوس',
      link: '/add-resorts-coasts',
    },
    {
      image: image5,
      alt: 'وحدات تجارية & إدارية وطبية',
      title: 'وحدات تجارية & إدارية وطبية',
      description: 'محل، مكتب، عيادة، صيدلية، مطعم، كافيه، مخزن، جراج',
      link: '#',
    },
    {
      image: image6,
      alt: 'أراضي',
      title: 'أراضي',
      description: 'زراعية، سكنية، صناعية، تجارية',
      link: '#',
    },
    {
      image: image7,
      alt: 'مباني',
      title: 'مباني',
      description: 'عمارة، مول، برج، مصنع، مستودع',
      link: '#',
    },
    {
      image: image8,
      alt: 'مقابر ومدافن',
      title: 'مقابر ومدافن',
      description: 'مقابر ومدافن للبيع',
      link: '#',
    },
    {
      image: image9,
      alt: 'غرف وأجنحة فندقية',
      title: 'غرف وأجنحة فندقية',
      description: 'قريباً',
      link: '#',
    },
  ];

  return (
    <div>
      <Header />

      <section className="our-service pb-12">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="main-title text-center mb-40">
                <h2 className={styles.textthm}>انشر إعلانك</h2>
                <p className="text-center mb-4">اختر الفئة</p>
              </div>
            </Col>

            {propertyCards.map((property, index) => (
              <Col key={index} sm={6} md={6} lg={4} className="mb-4">
                <Link to={property.link} style={{ textDecoration: 'none' }}>
                  <Card className="service_grid">
                    <Card.Img
                      variant="top"
                      src={property.image}
                      alt={property.alt}
                      style={{ height: '250px', width: '100%' }}
                    />
                    <Card.Body>
                      <Card.Title className="text-primary">{property.title}</Card.Title>
                      <Card.Text className={styles.customCardText}>
                        {property.description}
                      </Card.Text>
                      <Card.Text className={styles.customCardbutton}>
                        اضافه اعلانك <FontAwesomeIcon icon={faArrowRight} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </section>
    </div>
  );
}

export default SubmitpropertyPage;
