import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleTodos, deleteTodos} from '../actions/todoActions'
import Todo from './Todo'



handleChange = (event) => {
  const todo = this.state.todo
  todo.task = event.target.value
  this.setState({todo})
}

class Todos extends Component {
  render () {

    const todoList = this.props.todos.map(todo => {
      <Todo todoId = {todo.id} />
    })

    return (
      <div>
        <Todo todo={todo}/>
        <button onClick={this.props.deleteTodo()}>DO NOT PRESS</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, toggleTodo)(Todos)