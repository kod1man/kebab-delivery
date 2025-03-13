import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function CourierCard({ order, onDelete }) {
  return (
    <Col xs={6}>
      <Card>
        <Card.Img variant="top" src={order.img} />
        <Card.Body>
          <Card.Title>Название:{order.title}</Card.Title>
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
