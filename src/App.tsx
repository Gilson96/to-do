import {useState} from 'react'
import React from 'react';
import Todos from './components/Todos';
import Todo from './todo';
import NewTodo from './components/NewTodo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    // .concat will create a new array
    // because it shouldn't mutate the existing array
    // that's how properly update a state
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  //  filter out the Todo to remove
  //  go through all todos and remove the todo
  //  where the id is equel to todoId
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
