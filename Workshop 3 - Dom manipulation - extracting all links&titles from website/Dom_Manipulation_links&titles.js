
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

function getArticles() {
  return Array.prototype.map.call(document.querySelectorAll(".cd--card"), el => {
    const text = el.innerText;
    const link = el.querySelector("a")?.href;
    return { text, link };
  });
}

function clearBody() {
  document.body.innerHTML = "";
}

function addLinks(articles) {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  articles.forEach(article => {
    const a = document.createElement("a");
    a.innerText = article.text;
    a.href = article.link;

    const li = document.createElement("li");
    li.appendChild(a);

    ul.appendChild(li);
  });
}

function addStyle() {
  // Change the colors of all "a" elements. Generally speaking, this isn't a good practice, but this isn't our focus right now.
  const css = `
  a:hover {
    color: purple;
  }

  a:visited {
    color: gray;
  }
  `;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}

const articles = getArticles();
clearBody();
addLinks(articles);
addStyle();
