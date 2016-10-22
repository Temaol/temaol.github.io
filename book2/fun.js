var drawli = function(row) {
    k = row[0];
    v = row[1];
    document.write('<li><a href="' + k + '">' + v + '</a></li>');
    // k = http://mobile.flibusta.is/b/65783/mobi
    // v = Слово о полку Игореве (kindle)

}
var drawul = function(data) {
    document.write('<ul>');
    data.forEach(function(item, i, data) {
        drawli(item);
    });
    document.write('</ul>');
}
