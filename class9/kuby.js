function kuby(x) {
    [d, a, b, c] = x.split(' ');
    var otvet = div(a, d) * div(b, d) * div(c, d);
    // console.log(otvet);
    document.getElementById('otvet').innerHTML = otvet;
}

function div(val, by) {
    return (val - val % by) / by;
}
