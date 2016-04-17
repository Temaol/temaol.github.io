function math() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var D = b * b - 4 * a * c;
    var x1 = (-b - Math.sqrt(D)) / (2 * a);
    var x2 = (-b + Math.sqrt(D)) / (2 * a);
    put_in_place("D", D);
    put_in_place("x1", x1);
    put_in_place("x2", x2);
}

function put_in_place(name, value) {
    txt = document.getElementById(name).innerHTML;
    document.getElementById(name).innerHTML = txt + value;
}
