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


export default {
    initStore,
}