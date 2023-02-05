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

// Tutaj możesz dodać kolejne kategorie gier i gry w każdej z nich

// Tworzenie nowej kategorii
const newCategory = document.createElement("div");
newCategory.classList.add("game-category");
newCategory.innerHTML = `

  <h2>Nowa Kategoria</h2>
  <div class="game">
    <h3 class="game-title">Nazwa gry</h3>
    <p class="game-description">Opis gry</p>
    <p class="game-date">Data gry</p>
    <button class="game-button">Przejdź do gry</button>
  </div>
`;
// Dodawanie nowej kategorii do kontenera gier
gameContainer.appendChild(newCategory);

// Modyfikacja nowej kategorii
const gameInNewCategory = newCategory.querySelector(".game");
gameInNewCategory.querySelector(".game-title").innerHTML = "Nazwa gry w nowej kategorii";
gameInNewCategory.querySelector(".game-description").innerHTML = "Opis gry w nowej kategorii";
gameInNewCategory.querySelector(".game-date").innerHTML = "Data gry w nowej kategorii";
gameInNewCategory.querySelector(".game-button").onclick = function() {
window.location.href = "link_do_strony_gry_w_nowej_kategorii";
};
