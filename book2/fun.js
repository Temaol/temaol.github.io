var drawtr = function(row) {
    k = Object.keys(row);
    v = row[k];
    document.write("<tr> \
        <td>" + k +" </td> \
        <td class='c'><div>" + v + "</div></td> \
    </tr>");
}
