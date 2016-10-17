function fish(x) {
    [volume,quantity] = x.split(' ');
    [volume,quantity] = [Number(volume),Number(quantity)];
    var otvet = quantity * 3;
    if(otvet<=volume){return('N0')}
else
    {return('YES ' + div(otvet - volume + 3, 3))};
}

function div(val, by) {
    return (val - val % by) / by;
}

// tests
if (fish('10 4') == 'YES 1') {
    console.log('Test for 10 4 passed, otvet is: ' + fish('10 4'));
}
if (fish('157 54') == 'YES 2') {
    console.log('Test for 157 54 passed, otvet is: ' + fish('157 54'));
}
if (fish('12 4') == 'N0') {
    console.log('Test for 12 4 passed, otvet is: ' + fish('12 4'));
}