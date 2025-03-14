import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function CourierCard({ order, onDelete }) {
  return (
    <Col xs={6}>
      <Card>
        <Card.Img variant="top" src={'http://localhost:3000/img/' + order.img || ''} />
        <Card.Body>
          <Card.Title>Название:{order.title}</Card.Title>
          <Card.Text>Город: {order.city}</Card.Text>
          <Card.Text>Цена: {order.price}</Card.Text>
          <Card.Text>Скидка: {order.discountPrice} %</Card.Text>
          {order.customer ? (
            <Card.Text>
              Заказ куплен пользователем {order.customer.name}, свяжитесь по номеру
              телефона: {order.customer.phone}. Покупатель находится в городе :{' '}
              {order.customer.city}
            </Card.Text>
          ) : (
            <Card.Text>Заказ еще никем не куплен</Card.Text>
          )}
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
