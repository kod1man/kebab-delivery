import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function OrderCard({ order, user, onBuy }) {
  const handlePurchase = async () => {
    try {
      await axios.put(`api/orders/${order.id}/purchase`, {
        customerId: user.data.id,
      });
      onBuy(order.id);
    } catch (error) {
      console.log('Ошибка при совершении покупки', error);
    }
  };

  console.log(order);

  return (
    <Col xs={6}>
      <Card>
        <Card.Img variant="top" src={'http://localhost:3000/img/' + order.img || ''} />
        <Card.Body>
          <Card.Title>Название:{order.title}</Card.Title>
          <Card.Text>Город: {order.city}</Card.Text>
          <Card.Text>Цена: {order.price}</Card.Text>
          <Card.Text>
            Цена со скидкой: {order.price * (1 - order.discountPrice / 100)}
          </Card.Text>

           {user.data.role === 'customer' && <Button variant="success" className="submit-button" onClick={handlePurchase}>
            Выкупить
          </Button>}
        </Card.Body>
      </Card>
    </Col>
  );
}
