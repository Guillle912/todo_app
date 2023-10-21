import todoStore from './store/todo.store';
import './style.css'
import { App } from './todos/app'

console.log('Hola Mundo')

todoStore.initStore()
App('#app');