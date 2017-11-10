function put_in_place(name, value) {
    document.getElementById(name).innerHTML = value;
}

function mathb() {
    var a = document.getElementById("x").value;
    if (a.length > 9 || a < 1) {
        put_in_place("D", "Обмеження: 1 ≤ х ≤ 1000000000 (10<sup>9</sup>) ")
    } else {

        var a4 = (a.match(/4/g) || []).length;
        var a7 = (a.match(/7/g) || []).length;

        put_in_place("D", a4 + a7)
    }
}

function math3() {
    var kn = document.getElementById("knstr").value;
    var values = kn.split(" ");
    var k = values[0];
    var n = values[1];
    var c = document.getElementById("c").value;
    var prices = c.split(" ");
    prices = prices.filter(Boolean).sort(function(a,b){ return a - b });
  if (prices.length != n) {
    put_in_place("number", "Обмеження: SIZE(C) = N")
  }
  else {
  console.log(k);
  console.log(prices);
    var number = 0;
    while (k > 0) {
        k -= prices[number];
        console.log(k);
        if (k > 0) number += 1;


    }

    put_in_place("number", number)

}

function math4() {
    var name = document.getElementById("name").value;
    var parol = "";
    var last = name.length - 1
    for (i = 0; i < name.length / 2; i++) {
        if (last - i == i) {
            (parol += name[i])
        } else {
            (parol += name[i] + name[last - i])
        }
    }
    put_in_place("parol", parol)
}



