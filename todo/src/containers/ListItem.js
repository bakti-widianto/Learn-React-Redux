import React, { Component } from 'react';
import Item from './Todo';
import { connect } from 'react-redux';
import { loadTodo } from '../actions'

class ListItem extends Component {

    componentDidMount() {
        this.props.loadTodo();
    }

    render() {
        const nodes = this.props.todos.map((todo, index) => {
            return (
                <Item
                    key={index}
                    todo={todo} />
            )
        })
        return (
            <ol>
                {nodes}
            </ol>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    loadTodo: () => dispatch(loadTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem)


