

export const createTodoHTML = ( todo ) => {
    if( !todo ) throw new Error('Se requiere el todo')

    const html = `
                    <div class="view">
                        <input class="toggle" type="checkbox" ${ todo.done ? 'checked' : ''}>
                        <label>${ todo.description }</label>
                        <button class="destroy"></button>
                    </div>
                        <input class="edit" value="Create a TodoMVC template">
                `;

    const liElement = document.createElement('li');
    liElement.setAttribute('data-id', todo.id);
    if( todo.done === true ){
        liElement.classList.add('completed');
    }
    liElement.innerHTML = html

    return liElement
}