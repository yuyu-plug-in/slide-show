export function getType(e) {
    console.log(/(\w+)(?=])/g.exec(Object.prototype.toString.call(e))[0])
    return /(\w+)(?=])/g.exec(Object.prototype.toString.call(e))[0]
}
