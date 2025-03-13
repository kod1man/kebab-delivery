import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function CustomerCard({ order }) {
  return (
    <Col xs={6}>
      <Card style={{ marginBottom: '40px' }}>
        <Card.Img variant="top" src={'http://localhost:3000/img/' + order.img || ''} />
        <Card.Body>
          <Card.Title>Название:{order.title}</Card.Title>
          <Card.Text>Город: {order.city}</Card.Text>
          <Card.Text>Цена: {order.price}</Card.Text>
          <Card.Text>
            Цена со скидкой: {order.price * (1 - order.discountPrice / 100)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
