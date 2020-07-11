import React from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toDos: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.classToggler = this.classToggler.bind(this);
    this.toDoRemover = this.toDoRemover.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = {
      title: this.title.value,
      description: this.description.value,
      done: false,
    };
    event.target.reset();
    this.setState({toDos: [...this.state.toDos, newState]});
  }

  classToggler(toDo) {
    const done = toDo.done;
    toDo.done = !done;
    this.setState(this.state);
  }

  toDoRemover(i){
    const newState = this.state.toDos
    newState.splice(i, 1);
    this.setState({toDos: newState});
  }

  render() {
    return (
        <main>
          <header>
            <h1>Your Todo list</h1>
          </header>
            <h2>Register a new Todo here</h2>
            <form className="form" onSubmit={this.handleSubmit}>
              <input type="text" name="title" className="form__title" placeholder="Title" ref={el => this.title = el} />
              <input type="text" name="description" className="form__description" placeholder="Description" ref={el => this.description = el} />
              <input type="submit" value="Add" className="form__submit" />
            </form>
            <TodoList state={this.state} classToggler={this.classToggler} toDoRemover={this.toDoRemover}/>
        </main>
    );
  }
}

export default App;
