import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            label,
            onToggleDone,
            onToggleImportant,
            done,
            important
        } = this.props;

        let classNames = 'todo-list-item-label'

        if (done) classNames += ' done';
        if (important) classNames += ' important';

        const style = {
            color: important ? 'tomato' : 'black'
        };

        return (
            <div className="todo-list-item d-flex justify-content-between">
                <span 
                    className={classNames}
                    style={style}
                    onClick={ onToggleDone }>
                    { label }
                </span>
                
                <button
                    type="button"
                    className="exclam btn btn-outline-success btn-sm"
                    onClick={ onToggleImportant }>
                        <i className="fa fa-exclamation"></i>
                </button>

                <button
                    type="button"
                    className="trash btn btn-outline-danger btn-sm"
                    onClick={ this.props.onDeleted }>
                        <i className="fa fa-trash"></i>
                </button>
        </div>
        );
    }
}
