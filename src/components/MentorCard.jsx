import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MentorCard = ({ mentor, onLike, onDislike }) => {
  return (
    <Card style={{ width: '22rem' }} className="shadow-lg mx-auto">
      <Card.Img variant="top" src={mentor.imageUrl} alt={mentor.name} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body className="text-center">
        <Card.Title>{mentor.name}, {mentor.age}</Card.Title>
        <Card.Text>
          <strong>{mentor.occupation}</strong> at {mentor.company}
          <br />
          <small>{mentor.bio}</small>
        </Card.Text>
        <div className="d-flex justify-content-around mt-4">
          <Button variant="danger" size="lg" onClick={() => onDislike(mentor.id)}>
            <i className="bi bi-x-lg"></i>
          </Button>
          <Button variant="success" size="lg" onClick={() => onLike(mentor.id)}>
            <i className="bi bi-heart-fill"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MentorCard;
