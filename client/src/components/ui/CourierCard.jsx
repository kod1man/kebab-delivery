import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import './CourierCard.css'; 

export default function CourierCard({ order, onDelete }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="courier-card">
        <Card.Img
          variant="top"
          src={'http://localhost:3000/img/' + (order.img || '')}
          className="card-image"
        />
        <Card.Body className="card-body">
          <Card.Title>Название: {order.title}</Card.Title>
          <Card.Text>Город: {order.city}</Card.Text>
          <Card.Text>Цена: {order.price}</Card.Text>
          <Card.Text>Скидка: {order.discountPrice} %</Card.Text>
          <Button
            variant="success"
            className="submit-button"
            onClick={() => onDelete(order.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
