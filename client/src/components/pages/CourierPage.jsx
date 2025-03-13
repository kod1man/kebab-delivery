import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourierCard from '../ui/CourierCard';
import Row from 'react-bootstrap/esm/Row';
import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axiosInstance';
import './CourierPage.css'; // Убедитесь, что путь правильный

export default function CourierPage({ orders, courierId, onLogout }) {
  const [input, setInput] = useState({
    title: '',
    city: '',
    img: '',
    price: '',
    discountPrice: '',
  });

  const [filterOrders, setFilterOrders] = useState([]);
  const navigate = useNavigate();

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

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row className="mb-3">
        <Button
          variant="danger"
          onClick={handleLogoutClick}
          className="logout-button"
        >
          Выход
        </Button>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <CourierAddForm setInput={setInput} input={input} submitHandler={submitHandler} />
      </Row>
      <Row style={{ marginTop: '10px' }}>
        {filterOrders.length > 0 ? (
          filterOrders.map((el) => (
            <CourierCard key={el.id} order={el} onDelete={deleteHandler} />
          ))
        ) : (
          <p className="no-orders-message">Заказы еще не добавлены, пожалуйста, добавьте заказ</p>
        )}
      </Row>
    </Container>
  );
}