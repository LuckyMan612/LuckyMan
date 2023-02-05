const gameContainer = document.getElementById("gameContainer");

const gameJam = document.getElementById("gameJam");
const game1 = gameJam.querySelector(".game");
game1.querySelector(".game-title").innerHTML = "Escape The Dungeon";
game1.querySelector(".game-description").innerHTML = "You are escaping from the dungeons!";
game1.querySelector(".game-date").innerHTML = "24.01.2023";
game1.querySelector(".game-button").onclick = function() {
  window.location.href = "https://lucky2337.itch.io/escape-dungeon";
};

// Tutaj możesz dodać kolejne gry w kacji Game Jam
const game2 = gameJam.querySelector(".game2");
game2.querySelector(".game-title").innerHTML = "Escape The Dungeon 2";
game2.querySelector(".game-description").innerHTML = "You are escaping from the dungeons! But version 2 :D";
game2.querySelector(".game-date").innerHTML = "24.01.2023";
game2.querySelector(".game-button").onclick = function() {
  window.location.href = "https://lucky2337.itch.io/escape-the-dungeon-2";
};

// Tutaj możesz dodać kolejne kategorie gier i gry w każdej z nich
const game2 = gameJam.querySelector(".game");
game2.querySelector(".game-title").innerHTML = "Escape The Dungeon 2";
game2.querySelector(".game-description").innerHTML = "You are escaping from the dungeons! But version 2 :D";
game2.querySelector(".game-date").innerHTML = "24.01.2023";
game2.querySelector(".game-button").onclick = function() {
  window.location.href = "https://lucky2337.itch.io/escape-the-dungeon-2";
};

