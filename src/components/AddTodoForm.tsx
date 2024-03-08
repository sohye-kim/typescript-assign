import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface AddTodoFormProps {
  title: string;
  date: Date;
  content: string;
  titleChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dateChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  contentChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addButtonHandler: () => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({
  title,
  date,
  content,
  titleChangeHandler,
  dateChangeHandler,
  contentChangeHandler,
  addButtonHandler,
}) => (
  <Form>
    <h3 className='title'>✨Add to-do✨</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <div id='grid'>
        <Form.Control className='todotitle' type="input" placeholder="제목 ..." value={title} onChange={titleChangeHandler}></Form.Control>
        <Form.Control className='date' type='date' value={Date.now()} onChange={dateChangeHandler} />
        <Button className='addButton' variant="info" onClick={addButtonHandler}>
          추가
        </Button>{' '}
      </div>
      <Form.Control as="textarea" placeholder="할 일 ..." rows={3} value={content} onChange={contentChangeHandler} />
    </Form.Group>
  </Form>
);

export default AddTodoForm;