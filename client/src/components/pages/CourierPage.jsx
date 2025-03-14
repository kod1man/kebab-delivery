import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourierCard from '../ui/CourierCard';
import Row from 'react-bootstrap/esm/Row';
import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axiosInstance';
import './CourierPage.css'; // Убедитесь, что путь правильный

export default function CourierPage({ orders, courierId, user }) {
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
      const dataFromForm = event.target;
      const newDataFromForm = new FormData(dataFromForm);
      const dataForApi = Object.fromEntries(newDataFromForm);
      if (
        !dataForApi.title ||
        !dataForApi.city ||
        !dataForApi.file ||
        !dataForApi.price ||
        !dataForApi.discountPrice
      ) {
        alert('Не все поля заполнены');
        return;
      }
      const data = new FormData();
      data.append('title', dataForApi.title);
      data.append('city', dataForApi.city);
      data.append('file', dataForApi.file);
      data.append('price', dataForApi.price);
      data.append('discountPrice', dataForApi.discountPrice);
      const res = await axiosInstance.post('/orders/create', data);
      if (res.status === 201) {
        setFilterOrders((prev) => [...prev, res.data]);
        setInput({ title: '', city: '', price: '', discountPrice: '', password: '' });
      }
      event.target.reset();
    } catch (error) {
      console.log(error);
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

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="button-center">
        <Button variant="danger" onClick={handleBackClick} className="logout-button">
          вернуться назад
        </Button>
      </div>
      <Container style={{ marginTop: '20px' }}>
        <Row className="mb-3"></Row>
        <Row style={{ marginTop: '10px' }}>
          <CourierAddForm
            setInput={setInput}
            input={input}
            submitHandler={submitHandler}
          />
        </Row>
        <Row style={{ marginTop: '10px' }}>
          {filterOrders.length > 0 ? (
            filterOrders.map((el) => (
              <CourierCard key={el.id} order={el} onDelete={deleteHandler} user={user} />
            ))
          ) : (
            <p className="no-orders-message">
              Заказы еще не добавлены, пожалуйста, добавьте заказ
            </p>
          )}
        </Row>
      </Container>
    </>
  );
}
