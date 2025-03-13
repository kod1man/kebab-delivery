import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import OrderCard from '../ui/OrderCard';
import axios from 'axios';
// import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

export default function OrdersPage({ order, user }) {
  const [orders, setOrders] = useState(order);
  const filteredOrders = order.filter(
    (el) => el.city === user.data?.city && el.isAvailable === true,
  );

  const handleBuy = (orderId) => {
    setOrders(orders.filter((el) => el.id !== orderId));
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row style={{ marginTop: '10px' }}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((el) => (
            <OrderCard key={el.id} order={el} user={user} onBuy={handleBuy} />
          ))
        ) : (
          <div>
            <h3>Нет заказов в вашем городе</h3>
          </div>
        )}
      </Row>
    </Container>
  );
}
