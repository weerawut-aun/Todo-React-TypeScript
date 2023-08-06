import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PropsFormTodo {
  addTodo: (text: string) => void;
}

const FormTodo = ({ addTodo }: PropsFormTodo) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <Form onSubmit={handleChange}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
