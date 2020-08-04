import React, { Component } from 'react';
import FormItem from './FormItem';
import ListItem from './ListItem';
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: { 'token': '1234hiongeoig' }
});

export default class BoxItem extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }

        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        request.get('/todos')
            .then(function (response) {
                let todos = response.data.map(item => ({ ...item, sent: true }))
                console.log(todos)
                this.setState({ todos: todos });
            }.bind(this))
            .catch(function (error) {
                alert(error);
            })
    }

    addTodo(todo) {
        const id = Date.now();
        this.setState((state, props) => ({
            todos: [...state.todos, { id: id, task: todo, sent: true }]
        }));
        request.post('/todos', {
            id, task: todo
        })
            .then(function (response) {
                //this.setState({ todos: response.data });
            }.bind(this))
            .catch(function (error) {
                this.setState((state, props) => {
                    return {
                        todos: state.todos.map(item => {
                            if (item.id == id) {
                                item.sent = false;
                            }
                            return item
                        })
                    }
                });
            }.bind(this))
    }

    resendTodo = (todo) => {
        request.post('/todos', todo)
            .then(function (response) {
                this.setState((state, props) => {
                    return {
                        todos: state.todos.map(item => {
                            if (item.id == todo.id) {
                                item.sent = true;
                            }
                            return item
                        })
                    }
                });
            }.bind(this))
            .catch(function (error) {
                
            }.bind(this))
    }

    render() {
        return (
            <div>
                <FormItem tambah={this.addTodo} />
                <ListItem todos={this.state.todos} resend={this.resendTodo} />
            </div>
        )
    }
}