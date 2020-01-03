import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = (props) => {
    console.log(props);
    const {
        todos,
        onDeleted,
        onToggleDone,
        onToggleImportant,
    } = props;
    const elements = todos.map((item) => {
        const {
            id,
            ...other
        } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    { ...other }
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        );
    });
    return (
            <ul className="list-group todo-list d-flex">
                { elements }
            </ul>
    );
};

export default TodoList;
