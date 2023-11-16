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
            <span class="createdAt">${todo.createdAt}</span>
            <span class="priority">${todo.priority}</span>
            <button class="xBtn" onclick="onRemoveTodo(event, '${
                todo.id
            }')">x</button>
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

    const elInputTxt = document.querySelector('.inputTxt')
    if (!elInputTxt.value) return
    const elInputPriority = document.querySelector('.inputPriority')
    if (!elInputPriority.value) return


    addTodo(elInputTxt.value, elInputPriority.value)
    elInputTxt.value = ''
    elInputPriority.value = ''

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
