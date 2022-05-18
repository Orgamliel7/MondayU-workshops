
// my solution

var x = document.querySelectorAll("a");
var myarray = []
for (var i=0; i<x.length; i++){
    var cleantext = x[i].textContent.replace(/\s+/g, ' ').trim();
    var cleanlink = x[i].href;
    myarray.push([cleantext,cleanlink]);
};
function make_table() {
    var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
    for (var i=0; i<myarray.length; i++) {
        table += '<tr><td>'+ myarray[i][0] + '</td><td>'  + myarray[i][1] + '</td></tr>';
    };

    var w = this.window;
    w.document.write(table);
}
make_table()



// Monday solution

Array.prototype.map.call(document.querySelectorAll('.cd--card'), (el => {
    const text = el.innerText;
const link = el.querySelector('a')?.href;
return {text, link};
}))