import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import OrderCard from '../ui/OrderCard';
import axios from 'axios';
// import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

export default function OrdersPage({ order }) {




  const submitHandler = (event) => {
    event.preventDefault();
    setOrder((prev) => [input, ...prev]);
    setInput({ title: '', city: '', url: '', price: '', discountPrice: '' });
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row style={{ marginTop: '10px' }}>
        {order.map((el) => (
          <OrderCard key={el.title} order={el} />
        ))}
      </Row>
    </Container>
  );
}
