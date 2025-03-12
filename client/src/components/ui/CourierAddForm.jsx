import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

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
        placeholder="Desc"
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
        placeholder="URL"
      />
      <br />
      <Form.Control
        type="text"
        name="discount"
        onChange={changeHandler}
        value={input.discount}
        placeholder="URL"
      />
      <br />
      <Button variant="success" type="submit" style={{ marginTop: '10px' }}>
        Add
      </Button>
    </Form>
  );
}
