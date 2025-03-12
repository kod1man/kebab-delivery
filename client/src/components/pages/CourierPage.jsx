import React, { useState } from 'react';
import CourierCard from '../ui/CourierCard';
import Row from 'react-bootstrap/esm/Row';
import CourierAddForm from '../ui/CourierAddForm';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

export default function FlowersPage() {
  const [order, setOrder] = useState([]);
  const [input, setInput] = useState({ title: '', desc: '', url: '' });
  const [show, setShow] = useState(false);

  const deleteHandler = (id) => {
    setCurrentFlowers((prev) => prev.filter((flower) => flower.id !== id));
  };

  const changeHandler = (event) => {
    // console.log("event.target.name", event.target.name);
    // console.log("event.target.value", event.target.value);
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setCurrentFlowers((prev) => [input, ...prev]);
    setInput({ title: '', desc: '', url: '' });
  };

  return (
    <Container>
      <Row style={{ marginTop: '10px' }}>
        (
        <CourierAddForm
          input={input}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
        )
      </Row>
      <Row style={{ marginTop: '10px' }}>
        {order.map((el) => (
          <CourierCard key={el.title} order={el} deleteHandlerKey={deleteHandler} />
        ))}
      </Row>
    </Container>
  );
}
