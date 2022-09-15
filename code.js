// helloWorld function 
 helloWorld = () => {
    return "Hello, World!";
}
sayHello = (str) => {
    if (str === undefined) {
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
