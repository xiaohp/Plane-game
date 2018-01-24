const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const bindAll = function(sel, eventName, callback) {
    var l = es(sel)
    for (var i = 0; i < l.length; i++) {
        var input = l[i]
        input.addEventListener(eventName, function(event) {
            callback(event)
        })
    }
}

const log = console.log.bind(console)

const imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

const rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
