import React, {useContext} from 'react'
import {Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ITodo } from '../interfaces'
import {Context} from './TodoContainer';

type TodoListProps = {
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({
  onRemove,
  onToggle
}) => {
    const todos = useContext<ITodo[]>(Context);

    if (todos.length === 0) {
        return <p>TodoList is empty!</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <span>
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={() => onToggle(todo.id)}
                                />
                                {todo.title}
                            </span>
                            <DeleteIcon
                                color='secondary'
                                onClick={event => removeHandler(event, todo.id)}
                            />
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}
