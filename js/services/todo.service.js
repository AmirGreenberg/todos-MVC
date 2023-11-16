'use strict'

var gTodos
var gFilterBy = 'All'
var gSortBy = 'Priority'

_createTodos()

function getTodos() {
    const filterdTodos = _filterTodos()
    return _sortTodos(filterdTodos)
}

function getTotalCount() {
    return gTodos.length
}

function getActiveCount() {
    return gTodos.filter((todo) => !todo.isDone).length
}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function setSortBy(sortBy) {
    gSortBy = sortBy
}

function addTodo(txt, priority) {
    const todo = _createTodo(txt, priority)
    gTodos.unshift(todo)

    _saveTodos()
}

function removeTodo(todoId) {
    const idx = gTodos.findIndex((todo) => todo.id === todoId)
    gTodos.splice(idx, 1)

    _saveTodos()
}

function toggleTodo(todoId) {
    const todo = gTodos.find((todo) => todo.id === todoId)
    todo.isDone = !todo.isDone

    _saveTodos()
}

// Private functions

function _createTodos() {
    gTodos = loadFromStorage('todosDB')
    if (gTodos && gTodos.length) return

    gTodos = [
        _createTodo('Do this', getRandomInt(1, 4)),
        _createTodo('Do that', getRandomInt(1, 4)),
        _createTodo('Try here', getRandomInt(1, 4)),
    ]
    _saveTodos()
}

function _createTodo(txt, priority) {
    return {
        id: makeId(),
        txt,
        isDone: false,
        createdAt: getDateString(),
        priority,
    }
}

function _saveTodos() {
    saveToStorage('todosDB', gTodos)
}

function _filterTodos() {
    if (gFilterBy === 'All') return gTodos

    const isDone = gFilterBy === 'Done' ? true : false
    return gTodos.filter((todo) => todo.isDone === isDone)
}

function _sortTodos(list) {
    if (gSortBy === 'Priority') gTodos = sortTodosByPriority(list)
    else if (gSortBy === 'Date') gTodos = sortTodosByDate(list)
    else gTodos = sortTodosByName(list)
    console.log('gTodos: ', gTodos)

    return gTodos
}
