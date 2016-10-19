function flipflop(x) {
    if (x == reverse(x)) {
        return ('перевёртыш')
    }
    else {
        return ('Не перевёртыш')
    }
}

function reverse(s) {
    return (s.split("").reverse().join(""));
}
