function kuby(x) {
    [d, a, b, c] = x.split(' ');
    var otvet = div(a, d) * div(b, d) * div(c, d);
    // console.log(otvet);
    return(otvet);
}

function div(val, by) {
    return (val - val % by) / by;
}

// tests
if (kuby('1 3 3 3') == 27) {
    console.log('Test for 1 3 3 3 passed, otvet is: ' + kuby('1 3 3 3'));
}
           if (kuby('2 4 4 8') == 16) {
    console.log('Test for 2 4 4 8 passed, otvet is: ' + kuby('2 4 4 8'));
}

