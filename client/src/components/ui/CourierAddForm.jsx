import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import './CourierAddForm.css'

export default function CourierAddForm({ setInput, input, submitHandler }) {
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className='registration-container'>
    <Form onSubmit={submitHandler} className="registration-form">
      <h2> Форма добавления непринятого заказа</h2>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="title"
          value={input.title}
          onChange={handleChange}
          placeholder="Название"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="city"
          value={input.city}
          onChange={handleChange}
          placeholder="Город"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control type="file" name="file" placeholder="URL" className="form-input" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="price"
          value={input.price}
          onChange={handleChange}
          placeholder="Цена"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="discountPrice"
          value={input.discoutPrice}
          onChange={handleChange}
          placeholder="Скидка(%)"
          className="form-input"
        />
      </Form.Group>
      <Button variant="success" type="submit" className="submit-button">
        Добавить заказ
      </Button>
    </Form>
    </div>
  );
}
