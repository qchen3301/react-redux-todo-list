import React, { Component } from 'react'
import {connect} from 'react-redux'

export default class Todo extends Component {
  render() {
      const todo = this.props.todos.find(todo => {
          return todo.id === this.props.todoId
      })
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={this.props.todo.id}>
              {this.props.todo.task}:
              <span onClick={()=>this.props.toggleTodo(this.props.todo.id)}>
                {this.props.todo.completed.toString()}
              </span>
            </li>
          ))}
        </ul>
        <button onClick={this.props.deleteTodo()}>DO NOT PRESS</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return (
        todos: state.todos
    )
}

export default connect(state, dispatch)(Todo)