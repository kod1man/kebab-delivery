import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CourierAddForm({ input, changeHandler, submitHandler }) {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="title"
        onChange={changeHandler}
        value={input.title}
        placeholder="Title"
      />
      <br />
      <Form.Control
        type="text"
        name="city"
        onChange={changeHandler}
        value={input.city}
        placeholder="City"
      />
      <br />
      <Form.Control
        type="text"
        name="url"
        onChange={changeHandler}
        value={input.url}
        placeholder="URL"
      />
      <br />
      <Form.Control
        type="text"
        name="price"
        onChange={changeHandler}
        value={input.price}
        placeholder="Price"
      />
      <br />
      <Form.Control
        type="text"
        name="discount"
        onChange={changeHandler}
        value={input.discount}
        placeholder="Discount(%)"
      />
      <br />
      <Button variant="success" type="submit" style={{ marginTop: '10px' }}>
        Add
      </Button>
    </Form>
  );
}
