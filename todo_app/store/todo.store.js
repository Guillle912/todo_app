import { Todo } from "../todos/models/todo.model";

const Filter = {
    all: 'all',
    completed: 'completed',
    pending: 'pending'
}

const state = {
    todos: [
        new Todo('Tengo que hacer la compra'),
        new Todo('Tengo cita en el dentista en Noviembre'),
        new Todo('Tengo cita en el fisio el 25 de Octubre'),
    ],
    filter: Filter.all,
}


const initStore = () => {
    console.log( state )
    console.log('initStore');
}

function loadStore() {

}

function getTodos( filter ) {
    if( filter === Filter.all ) {
        return [...state.todos];
    }else if(filter === Filter.completed){
        return state.todos.filter( todo => todo.done === true)
    }else if(filter === Filter.pending){
        return state.todos.filter( todo => todo.done === false)
    }else{
        throw new Error('Invalid filter');
    }
}

function addTodo( description ){
    if( !description ) throw new Error('Se requiere descripcion')
    state.todos.push( new Todo( description ));
}

function toggleTodo( todoId ){
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
}

function deleteTodo( todoId ){
    return state.todos = state.todos.filter( todo => todo.id !== todoId ); 
}

function deleteCompleted(){
    return state.todos = state.todos.filter( todo => todo.done === true ); 

}

function setFilter( newFilter = Filter.all ){
    return state.filter = newFilter;
}

function getCurrentFilter() {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos
}