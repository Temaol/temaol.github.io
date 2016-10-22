var drawli_ext = function(row) {
    var k = row[0];
    var v = row[1];
    var general_link = k.replace(/\/mobi$/, "");
    document.write('<li><a href="' + k + '">' + v + '</a> ');
    document.write('<a href="' + general_link + '/epub">(e-pub)</a> ');
    document.write('<a href="' + general_link + '/fb2">(FB2)</a>');
    document.write('</li>');
    // k = http://mobile.flibusta.is/b/65783/mobi
    // v = Слово о полку Игореве (kindle)

}
var drawul = function(data, ext) {
    document.write('<ul>');
    data.forEach(function(item, i, data) {
        if (ext) {
            drawli_ext(item)
        } else {
            drawli(item);
        }
    });
    document.write('</ul>');
}
var drawli = function(row) {
    k = row[0];
    v = row[1];
    document.write('<li><a href="' + k + '">' + v + '</a></li>');
    // k = http://mobile.flibusta.is/b/65783/mobi
    // v = Слово о полку Игореве (kindle)

}
