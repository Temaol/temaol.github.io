function felichita() {
    var text = '';
    for (n = 1000; n <= 9999; n++) {
        nn = n.toString();
        if (nn[0] + nn[1] == nn[2] + nn[3] || nn[1] + nn[0] == nn[2] + nn[3]) {
        text += nn + "\n"};
    }
  document.getElementById('felres').innerHTML = text;
}
