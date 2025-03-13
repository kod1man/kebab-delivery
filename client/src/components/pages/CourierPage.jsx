import React, { useEffect, useState } from 'react';
import CourierCard from '../ui/CourierCard';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axiosInstance';

export default function CourierPage({ orders, courierId }) {
  const [input, setInput] = useState({
    title: '',
    city: '',
    img: '',
    price: '',
    discountPrice: '',
  });

  console.log(input);

  const [filterOrders, setFilterOrders] = useState([]);

  useEffect(() => {
    if (orders.length > 0 && courierId) {
      setFilterOrders(orders.filter((el) => el.courierId === courierId));
    }
  }, [orders, courierId]);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/orders/create', input);
      setFilterOrders((prev) => [...prev, response.data]);
      setInput({ title: '', city: '', img: '', price: '', discountPrice: '' });
    } catch (error) {
      console.log(error, 'Ошибка в создании заказа');
    }
  };

  const deleteHandler = async (orderId) => {
    try {
      await axiosInstance.delete(`/orders/delete/${orderId}`);
      setFilterOrders((prev) => prev.filter((order) => order.id !== orderId));
    } catch (error) {
      console.log(error, 'Ошибка при удалении заказа');
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row style={{ marginTop: '10px' }}>
        <CourierAddForm setInput={setInput} input={input} submitHandler={submitHandler} />
      </Row>
      <Row style={{ marginTop: '10px' }}>
        {filterOrders.length > 0 ? (
          filterOrders.map((el) => (
            <CourierCard key={el.id} order={el} onDelete={deleteHandler} />
          ))
        ) : (
          <p>Заказы еще не добавлены, пожалуйста, добавьте заказ</p>
        )}
      </Row>
    </Container>
  );
}
