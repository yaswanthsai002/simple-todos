import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
export default class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: updatedTodosList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="todos-container">
        <h1 className="heading">Simple Todos</h1>
        <ul className="todos">
          {todosList.map(todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={this.deleteTodo} />
          ))}
        </ul>
      </div>
    )
  }
}
