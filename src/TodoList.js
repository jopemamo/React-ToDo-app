import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
  return (
    <section className= "toDos">
      { props.state.toDos.length > 0 ? 
      props.state.toDos.map((toDo, i) => (
      <TodoCard key={i} {...props} element={toDo} index={i} />
    )) : <h3 className="toDos__toDo">Waiting for some ToDos</h3> }
    </section>
  );
}

export default TodoList;