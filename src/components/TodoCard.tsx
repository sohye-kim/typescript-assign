import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface TodoItem {
  id: string;
  title: string;
  date: Date;
  content: string;
}

interface TodoCardProps {
  item: TodoItem;
  removeButtonHandler: (id: string) => void;
  toggleDoneHandler: (id: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ item, removeButtonHandler, toggleDoneHandler }) => (
  <Card className="cards" key={item.id}>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">마감 기한: {new Date(item.date).toDateString()}</Card.Subtitle>
      <Card.Text>{item.content}</Card.Text>
      <Button className="Buttons" variant="outline-info" onClick={() => removeButtonHandler(item.id)}>
        삭제
      </Button>{' '}
      <Button className="Buttons" variant="outline-info" onClick={() => toggleDoneHandler(item.id)}>
        완료
      </Button>{' '}
    </Card.Body>
  </Card>
);

export default TodoCard;