import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

export default function CourierAddForm({ input, changeHandler, submitHandler }) {
  return (
    <Form onSubmit={submitHandler} className="registration-form">
      <h2> Форма добавления непринятого заказа</h2>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="title"
          onChange={changeHandler}
          value={input.title}
          placeholder="Название"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="city"
          onChange={changeHandler}
          value={input.city}
          placeholder="Город"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="url"
          onChange={changeHandler}
          value={input.url}
          placeholder="URL"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="price"
          onChange={changeHandler}
          value={input.price}
          placeholder="Цена"
          className="form-input"
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="discountPrice"
          onChange={changeHandler}
          value={input.discountPrice}
          placeholder="Скидка(%)"
          className="form-input"
        />
      </Form.Group>
      <Button variant="success" type="submit" className="submit-button">
        Add
      </Button>
    </Form>
  );
}
