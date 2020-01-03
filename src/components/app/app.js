import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddListItem from "../add-list-item";
import './app.css';

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            todoData: [
                { label: 'Drink Coffee', important: false, id: 1 },
                { label: 'Make Awesome App', important: true, id: 2 },
                { label: 'Have a lunch', important: false, id: 3 }
            ],
            todoHistory: {
                todo: 1,
                done: 3,
            }
        };

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newTodoData = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ];
                return {
                    todoData: newTodoData
                };
            });
        };

        this.addItem = (text) => {
            this.setState(({todoData}) => {
                const lastInd = todoData.length - 1;
                const id = todoData[lastInd].id + 1;
                const newTodoData = [
                    ...todoData,
                    {label: text, important: false, id: id}
                ];
                return {
                    todoData: newTodoData
                };
            });
        }

        this.onToggleDone = (id) => {
            console.log('toggled done', id);
        };

        this.onToggleImportant = (id) => {
            console.log('toggled important', id);
        }
    }

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="app d-flex flex-wrap justify-content-center">
                    <AppHeader { ...this.state.todoHistory }/>
                    <SearchPanel />
                    <ItemStatusFilter />
                    <TodoList
                        todos={ this.state.todoData }
                        onDeleted={this.deleteItem}
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}/>
                    <AddListItem
                        onItemAdded={this.addItem}/>
                </div>
            </div>
        );
    }
}
