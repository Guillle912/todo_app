import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

const elementsIds = {
    todoList: '.todo-list',
}



export const App = ( elementId ) => {

    function displayTodos(){
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(  elementsIds.todoList, todos );
    }


    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
    })()
}