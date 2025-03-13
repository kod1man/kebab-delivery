import React, { useEffect, useState } from 'react';
import CourierCard from '../ui/CourierCard';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

export default function CourierPage({ setOrder, order }) {
  const [input, setInput] = useState({
    title: '',
    city: '',
    url: '',
    price: '',
    discountPrice: '',
  });

  useEffect(() => {
    axios('/courier')
      .then((res) => setOrder(res.data))
      .catch(console.log);
  });

  const deleteHandler = (title) => {
    setOrder((prev) => prev.filter((order) => order.title !== title));
  };

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setOrder((prev) => [input, ...prev]);
    setInput({ title: '', city: '', url: '', price: '', discountPrice: '' });
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row style={{ marginTop: '10px' }}>
        <CourierAddForm
          input={input}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </Row>
      <Row style={{ marginTop: '10px' }}>
        {order.map((el) => (
          <CourierCard key={el.title} order={el} deleteHandlerKey={deleteHandler} />
        ))}
      </Row>
    </Container>
  );
}
