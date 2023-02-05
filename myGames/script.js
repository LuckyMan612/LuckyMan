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
const game3 = gameJam.querySelector(".game3");
game2.querySelector(".game-title").innerHTML = "1 minute game";
game2.querySelector(".game-description").innerHTML = "This game was created in a minute!";
game2.querySelector(".game-date").innerHTML = "09.01.2023";
game2.querySelector(".game-button").onclick = function() {
  window.location.href = "https://lucky2337.itch.io/1-minute-game";
};
const game4 = gameJam.querySelector(".game4");
game2.querySelector(".game-title").innerHTML = "Reaction Game";
game2.querySelector(".game-description").innerHTML = "A game in which you test your reaction time.";
game2.querySelector(".game-date").innerHTML = "04.01.2023";
game2.querySelector(".game-button").onclick = function() {
  window.location.href = "https://lucky2337.itch.io/reaction-game";
};

