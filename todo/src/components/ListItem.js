import React, { Component } from 'react';
import Item from './Item'

function ListItem(props) {

    const listTodo = props.todos.map((todo, index) => <Item key={index} todo={todo} resend={props.resend} />)
    
    return (
        <ol>{listTodo}</ol>
    )
}

export default ListItem;