import { useState } from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { todoTypes } from './interfers';
import FormTodo from './components/FormTodo';
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState<todoTypes[]>([
    {
      text: 'This is a sampe todo',
      isDone: false,
    },
  ]);

  const addTodo = (text: string) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const markTodo = (index: number) => {
    const newTodo = [...todos];
    newTodo[index].isDone = true;
    setTodos(newTodo);
  };

  const removeTodo = (index: number) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  return (
    <div className="app">
      <div className="cotainer">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
