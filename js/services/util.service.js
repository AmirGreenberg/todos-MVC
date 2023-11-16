'use strict'

function makeId(length = 6) {
    var id = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        id += possible.charAt(getRandomInt(0, possible.length))
    }
    return id
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function getDateString() {
    var date = new Date()
    var dateStr = ''

    dateStr += date.getDate() + '/'
    dateStr += date.getMonth() + 1 + '/'
    dateStr += date.getFullYear() + ' Time: '
    dateStr += date.getHours() + ':'
    dateStr += date.getMinutes()

    return dateStr
}

function sortTodosByPriority(list) {
    list.sort((t1, t2) => t2.priority - t1.priority)
    return list
}

function sortTodosByName(list) {
    list.sort((t1, t2) => t1.txt.localeCompare(t2.txt))
    return list
}

function sortTodosByDate(list) {
    list.sort((t1, t2) => t2.createdAt.localeCompare(t1.createdAt))
    return list
}
