import React, {useEffect, useState} from 'react';
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
import {ITodo} from '../interfaces';

declare var confirm: (question: string) => boolean;

export const Context = React.createContext<ITodo[]>([]);

export const TodoContainer: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure to delete the item?');
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id));
        }
    }

    return (
        <Context.Provider value={todos}>
            <TodoForm onAdd={addHandler} />

            <TodoList
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </Context.Provider>
    )
}