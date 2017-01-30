// sanity check
//console.log("app.js linked.");



$(document).ready(function(){
  for(var i = 0; i < data.projects.length; i++) {
    var projects = data.projects[i];
    var item = ('<li>' +  projects.title + ' : ' + projects.category + '</li>');
    $('ul.projects').append(item);
  };
});



var data = {
  "projects" :
  [{
    "title"       : "memory game",
    "description" : "a game to test your memory",
    "category"    : "web development",
    "url"         : "file:///Users/yvonnetsu/Documents/BOOTCAMP/GeneralAssembly/Portfolio/tsuyy.github.io/projects/memory-game/memory-game.html",
    "img"         : "http://www.clipartkid.com/images/126/poker-cards-chips-table-scenes-poker-tournament-scenes-poker-game-wP4CDw-clipart.png"
  },
  {
    "title"       : "mr. fox",
    "description" : "practicing with json",
    "category"    : "web development",
    "url"         : "file:///Users/yvonnetsu/Documents/BOOTCAMP/GeneralAssembly/Portfolio/tsuyy.github.io/projects/json-to-html-with-mr-fox/index.html",
    "img"         : "https://media.giphy.com/media/aiL0BGeWHbtRu/giphy.gif"
  },
  {
    "title"       : "gradients",
    "description" : "colors of the sky",
    "category"    : "photography",
    "url"         : "file:///Users/yvonnetsu/Documents/BOOTCAMP/GeneralAssembly/Portfolio/tsuyy.github.io/projects/photography/p.html",
    "img"         : "projects/photography/01.jpg"
  }]
}
