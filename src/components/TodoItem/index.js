// Write your code here

import {Component} from 'react'
import './index.css'

export default class TodoItem extends Component {
  render() {
    const {todo, deleteTodo} = this.props
    const {id, title} = todo
    const onDelete = () => deleteTodo(id)
    return (
      <li className="todo">
        <p className="todo-title">{title}</p>
        <button type="button" className="del-btn" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}
