import React from 'react';

function Item(props) {
return <li>
    {props.todo.task}
    {!props.todo.sent && <button onClick={() => {props.resend(props.todo)}}>resend</button>}
    </li>;
}

export default Item;
