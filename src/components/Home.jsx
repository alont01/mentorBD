import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="hero-section text-white text-center">
        <Container>
          <Row>
            <Col>
              <h1 className="display-3 fw-bold">Empowering the Bangladeshi Community</h1>
              <p className="lead mt-4">
                Join us in our mission to expand the professional community by fostering mentorship and providing resources to disadvantaged communities in Bangladesh.
              </p>
              <Button variant="primary" size="lg" className="mt-4">Get Involved</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-5">
        <Row className="text-center">
          <Col md={4}>
            <i className="bi bi-tools display-4 text-primary"></i>
            <h2 className="mt-3">Technical Workshops</h2>
            <p>Free, customized workshops to enhance your technical skills, and prepare you for your career and college.</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-people-fill display-4 text-primary"></i>
            <h2 className="mt-3">Mentor BD Network</h2>
            <p>Gain access to our exclusive network of professionals through group chats and email communities.</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-heart-fill display-4 text-primary"></i>
            <h2 className="mt-3">Mentor Matching</h2>
            <p>Our innovative platform helps you find the perfect mentor to guide you on your professional journey.</p>
          </Col>
        </Row>
      </Container>

      <div className="cta-section bg-light py-5 mt-5">
        <Container className="text-center">
          <Row>
            <Col>
              <h2>Ready to make a difference?</h2>
              <p className="lead mt-3">Become a mentor or a mentee today and help us build a stronger community.</p>
              <Button variant="primary" size="lg" className="mt-3 mx-2">Become a Mentor</Button>
              <Button variant="outline-primary" size="lg" className="mt-3 mx-2">Find a Mentor</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;