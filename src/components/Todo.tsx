import { todoTypes } from '../interfers';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  index: number;
  todo: todoTypes;
  markTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const Todo = ({ index, todo, markTodo, removeTodo }: Props) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ⅹ
        </Button>
      </div>
    </div>
  );
};

export default Todo;
