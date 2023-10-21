import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

const elementsIds = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
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


    const newDescription = document.querySelector( elementsIds.newTodoInput );
    const todoListUl = document.querySelector( elementsIds.todoList );
    
    newDescription.addEventListener( 'keyup', ( event ) => {
        if( event.keyCode !== 13 ) return
        if( event.target.value.trim().length === 0 ) return

        todoStore.addTodo( event.target.value )
        displayTodos()
        event.target.value = '';    
    })

    todoListUl.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute( 'data-id' ));
        displayTodos();
        
    })


    todoListUl.addEventListener('click', ( event ) => {
        console.log( event.target.className )
        const elementDestroy = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if( !element || !elementDestroy ) return


        todoStore.deleteTodo( element.getAttribute( 'data-id' ));
        displayTodos();
        
    })

}