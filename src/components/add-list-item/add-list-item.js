import React, { Component } from 'react';
import './add-list-item.css';

export default class AddListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onItemAdded} = this.props;
        return (
            <div className="d-flex add-list-item">
                <textarea
                    className="item-creator-input"
                    placeholder="Add new item..."></textarea>
                <button
                    className="item-creator btn btn-outline-secondary"
                    onClick={() => onItemAdded('item added')}>Create</button>
            </div>
        );
    }
}
