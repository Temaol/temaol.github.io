function felichita() {
    var text = '';
    for (n = 1000; n <= 9999; n++) {
        nn = n.toString();
        if (Number(nn[0]) + Number(nn[1]) == Number(nn[2]) + Number(nn[3])) {
            text += nn + "\n"
        };
    }
    document.getElementById('felres').innerHTML = text;
}
