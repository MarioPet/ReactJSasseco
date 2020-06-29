import React from 'react';
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItem: "",
      todoList: [
        {todo: "Walk the Dog", id: 1, done: false},
        {todo: "Eat a sandwich", id: 2, done: false},
        {todo: "Learn ReactJS with Redux", id: 3, done: false},
      ],
      user: {
        handle: "@mario5et",
        eMail: "mario5etkovski@gmail.com"
      },
      eMailInput: ""
    }

  }

  OnFieldChange = (e) => {
    this.setState({
      todoItem: e.target.value
    })
  }

  AddTodoItem = () => {

    var data = {
      todo: this.state.todoItem,
      id: this.state.todoList.length + 1,
      done: false
    }

    this.setState({
      todoList: [
        ...this.state.todoList,
        data
      ],
      todoItem: ""
    })
  }

  HandleStatusChange = (e, id) => {
    this.setState({
      todoList: this.state.todoList.map(el => { return el.id === id ? {...el, done: e.target.checked} : el })
    })
  }

  // Mala promena na Object vo state

  // HandleMailChange = (e) => {
  //   this.setState({
  //     eMailInput: e.target.value
  //   })
  // }

  // ChangeMail = () => {
  //   this.setState(prevState => ({
  //     user: {
  //       ...prevState.user,
  //       eMail: this.state.eMailInput
  //     }
  //   }))
  // }

  render() {
    return (
      <div id="app">
        <div id="todo">
          <TodoActions
            OnFieldChange={this.OnFieldChange}
            AddTodoItem={this.AddTodoItem}
            InputValue={this.state.todoItem}
          />
          <TodoList
            list={this.state.todoList}
            HandleStatusChange={this.HandleStatusChange}
          />
        </div>

        <br />

        {/* <div id="user">
          <h2>Handle: {this.state.user.handle}</h2>
          <h2>E-mail: {this.state.user.eMail}</h2>

          <input 
            onChange={this.HandleMailChange}
            type="text"
            placeholder="Enter new E-mail"
          />
          <button
            onClick={this.ChangeMail}
          >Change E-mail</button>
        </div> */}
      </div>
    )
  }
}

export default App;
