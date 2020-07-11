import React from 'react';

const TodoCard = ({element, index, classToggler, toDoRemover}) => {

  return (
    <div className={element.done ? "toDos__toDo toDos__toDo--done" : "toDos__toDo" }>
    <div onClick={() => classToggler(element)}>
      <h3>{element.title}</h3>
      <span>{element.description}</span>
    </div>
      <button className={element.done ? "toDos__remove toDos__toDo--show" : "toDos__remove"} onClick={() => toDoRemover(index)}>
         Remove 
      </button>
  </div>
  )
}

export default TodoCard;