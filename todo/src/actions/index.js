import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

// start load todo data
//NGIRIM KE REDUCERS
const loadTodoSuccess = (todos) => ({
    type: 'LOAD_TODO_SUCCESS',
    todos
})

const loadTodoFailure = () => ({
    type: 'LOAD_TODO_FAILURE'
})


//NGAMBIL DARI DATABASE
export const loadTodo = () => {
    return dispatch => {
        return request.get('todos')
            .then(function (response) {
                dispatch(loadTodoSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadTodoFailure())
            });
    }
}

// end load todo data

// start post todo data

const postTodoSuccess = (todos) => ({
    type: 'POST_TODO_SUCCESS',
    todos
})

const postTodoFailure = (id) => ({
    type: 'POST_TODO_FAILURE', id
})

const postTodoRedux = (id, task) => ({
    type: 'POST_TODO', id, task
})


export const postTodo = (todo) => {
    const id = Date.now();
    return dispatch => {
        dispatch(postTodoRedux(id, todo))//post front-end
        //post back-end
        return request.post('todos', { id, task: todo })
            .then(function (response) {
                dispatch(postTodoSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postTodoFailure(id))
            });
    }
}
//end post

//RESENDTODO
const resendTodoSuccess = (id) => ({
    type: 'RESEND_TODO_SUCCESS', id
})


export const resendTodo = (todo) => {
    return dispatch => {
        return request.post('todos', todo)
            .then(function (response) {
                dispatch(resendTodoSuccess(todo.id))
            })
            .catch(function (error) {

            });
    }
}