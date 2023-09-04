import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Portfolio() {
  // You can map through your projects or works here and display them as cards.
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      link: '#',
    },
  ];

  return (
    <Container className="mt-5">
      <h2>My Portfolio</h2>
      <div className="d-flex flex-wrap">
        {projects.map((project, index) => (
          <Card key={index} className="m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="primary" href={project.link}>
                View Project
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Portfolio;