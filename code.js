// helloWorld function 
 helloWorld = () => {
    return "Hello, World!";
}
sayHello = (str) => {
    let edges = ['boolean', 'number', 'null', 'object', 'function']
    let truthy = edges.every((x) => typeof str === x)
    if (truthy || str === undefined) {
        return "Hello, World!"
    } else {
    return "Hello, " + str + "!"}
    }

isFive = (num) => {
    if (parseInt(num) === 5) {
        return true
    }
    else {
        return false
    }
}

isEven = (num) => {
    return parseInt(num) % 2 === 0
}

isVowel = (str) => {
    let reg = /[aeiou]/i
    if (str !== undefined) {
      if (str.length === 1) {
    return reg.test(str) }
      else {
        return false
    }
    }
    else {
        return false
    }
}

add = (a, b) => {
if (a !== undefined || b !== undefined) {
    a = parseFloat(a)
    b = parseFloat(b)
    if (isNaN(a) || isNaN(b)) {
        return NaN
    }

    else {
        return a + b
    }
}
else {
    return NaN
}

}
