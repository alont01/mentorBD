import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import MentorCard from './MentorCard';

const dummyMentors = [
  {
    id: 1,
    name: 'Dr. Aisha Rahman',
    age: 45,
    occupation: 'Software Engineer',
    company: 'Google',
    bio: 'Experienced in AI/ML, passionate about mentoring young talent.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Jamal Khan',
    age: 38,
    occupation: 'Product Manager',
    company: 'Microsoft',
    bio: 'Expert in product strategy and development, loves guiding aspiring PMs.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-e695c6edd893?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Fariha Ahmed',
    age: 32,
    occupation: 'UX Designer',
    company: 'Adobe',
    bio: 'Creative designer with a focus on user-centered design, ready to inspire.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Tariq Hassan',
    age: 50,
    occupation: 'VP of Engineering',
    company: 'Meta',
    bio: 'Seasoned tech executive, providing leadership and career guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const MentorMatching = () => {
  const [mentors, setMentors] = useState(dummyMentors);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [showMatchAlert, setShowMatchAlert] = useState(false);

  const handleLike = (id) => {
    const likedMentor = mentors.find(mentor => mentor.id === id);
    setMatches([...matches, likedMentor]);
    setShowMatchAlert(true);
    setTimeout(() => setShowMatchAlert(false), 2000); // Hide alert after 2 seconds
    nextMentor();
  };

  const handleDislike = () => {
    nextMentor();
  };

  const nextMentor = () => {
    if (currentIndex < mentors.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // No more mentors to show
      setCurrentIndex(-1); // Indicate no more mentors
    }
  };

  if (currentIndex === -1) {
    return (
      <Container className="mt-5 text-center">
        <h2>No more mentors for now!</h2>
        <p className="lead">Check back later for new mentor recommendations.</p>
        {matches.length > 0 && (
          <div>
            <h3>Your Matches:</h3>
            <ul>
              {matches.map(match => (
                <li key={match.id}>{match.name}</li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    );
  }

  const currentMentor = mentors[currentIndex];

  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Find Your Perfect Mentor</h2>
          <p className="lead">Swipe through profiles to find a mentor who fits your goals.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          {showMatchAlert && (
            <Alert variant="success" className="text-center">
              It's a match with {matches[matches.length - 1]?.name}!
            </Alert>
          )}
          {currentMentor ? (
            <MentorCard
              mentor={currentMentor}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ) : (
            <Alert variant="info" className="text-center">
              Loading mentors...
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MentorMatching;
