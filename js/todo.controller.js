'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
    const strHtml = getTodos()
        .map(
            (todo) => `
        <li onclick="onToggleTodo('${todo.id}')">
            <span class="todo ${todo.isDone ? 'done' : ''}">${todo.txt}</span>
            <span class="createdAt">1</span>
            <span class="importance">2</span>
            <button class="xBtn" onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>
    `
        )
        .join('')

    elTodoList.innerHTML = strHtml

    const elTotalCount = document.querySelector('.total-count')
    const elActiveCount = document.querySelector('.active-count')

    elTotalCount.innerText = getTotalCount()
    elActiveCount.innerText = getActiveCount()
}

function onAddTodo(ev) {
    ev.preventDefault()

    const elInput = document.querySelector('input')
    if (!elInput.value) return

    addTodo(elInput.value)
    elInput.value = ''

    renderTodos()
}

function onSetFilterBy(elSelect) {
    setFilterBy(elSelect.value)
    renderTodos()
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()

    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId) {
    toggleTodo(todoId)
    renderTodos()
}
