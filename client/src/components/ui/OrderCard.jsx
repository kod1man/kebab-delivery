import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function OrderCard({ order, user }) {
  return (
    <Col xs={6}>
      <Card>
        <Card.Img variant="top" src={order.url} />
        <Card.Body>
          <Card.Title>Название:{order.title}</Card.Title>
          <Card.Text>Город: {order.city}</Card.Text>
          <Card.Text>Цена: {order.price}</Card.Text>
          <Card.Text>
            Цена со скидкой: {order.price * (1 - order.discountPrice / 100)}
          </Card.Text>

          <Button variant="success" className="submit-button">
            Выкупить
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
