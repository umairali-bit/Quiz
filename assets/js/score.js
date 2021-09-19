function viewScores(){
  var highscores =
  JSON.parse(window.localStorage.getItem("highscores")) || [];

  highscores.sort (function(a,b) {
      return b.score - a.score;
  });

  highscores.forEach (function(score){
  var liType = document.createElement("li");
  liType.textContent = score.initials + "-" + score.score;
  
  var olEl = document.getElementById ("highscores");
  olEl.appendChild(liType);
  });
}

function eraseHighscores () {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("erase").addEventListener ("click", eraseHighscores);

viewScores();