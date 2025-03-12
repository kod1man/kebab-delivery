import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function CourierCard({ order, deleteHandlerKey }) {
  return (
    <Col xs={6}>
      <Card>
        <Card.Img variant="top" src={flower.url} />
        <Card.Body>
          <Card.Title>{flower.title}</Card.Title>
          <Card.Text>{flower.desc}</Card.Text>
          <Card.Text>{flower.desc}</Card.Text>
          <Card.Text>{flower.desc}</Card.Text>
          <Button variant="success" onClick={() => deleteHandlerKey(flower.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
