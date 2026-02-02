import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Network = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Join the Mentor BD Network</h2>
          <p className="lead">
            Expand your professional connections and get access to exclusive resources.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="card-title text-primary">What you get:</h3>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  <i className="bi bi-chat-dots-fill me-2 text-success"></i>
                  Access to exclusive group chats with mentors and peers.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-envelope-fill me-2 text-info"></i>
                  Stay updated with our community via a dedicated email list.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-calendar-event-fill me-2 text-warning"></i>
                  Invitations to members-only events and webinars.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-person-check-fill me-2 text-danger"></i>
                  Opportunities for direct mentorship connections.
                </li>
              </ul>
              <div className="text-center mt-4">
                <Button variant="primary" size="lg">Join the Network Today!</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col>
          <h3>Why join?</h3>
          <p>
            The Mentor BD Network is a vibrant community designed to foster growth, learning, and
            connection among Bangladeshi professionals. Whether you're looking for guidance or want to
            share your expertise, our network provides the platform to make a meaningful impact.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Network;
