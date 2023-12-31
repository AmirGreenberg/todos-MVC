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
    var timeStr = new Date().toString().split(' ')[4]

    var date = new Date()
    var dateStr = ''

    dateStr += date.getDate() + '/'
    dateStr += date.getMonth() + 1 + '/'
    dateStr += date.getFullYear() + ' Time: '
    dateStr += timeStr

    return dateStr
}
