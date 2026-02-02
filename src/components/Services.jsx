import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h2>Our Services</h2>
          <p className="lead">
            We offer a range of free, customized workshops to help you succeed in your career and college applications.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-code-slash display-4 text-primary"></i>
              <Card.Title className="mt-3">Technical Skills</Card.Title>
              <Card.Text>
                From programming fundamentals to advanced topics, our workshops cover a wide range of technical skills to help you stay competitive in the job market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-briefcase-fill display-4 text-primary"></i>
              <Card.Title className="mt-3">Career Readiness</Card.Title>
              <Card.Text>
                We provide workshops on resume building, interview preparation, and networking to help you land your dream job.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-building display-4 text-primary"></i>
              <Card.Title className="mt-3">College Readiness</Card.Title>
              <Card.Text>
                Our workshops guide you through the college application process, from writing personal statements to preparing for standardized tests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
