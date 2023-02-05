const games = [
  {
    title: "Escape The Dungeon",
    description: "You are escaping from the dungeons!",
    date: "24.01.2023",
    link: "https://lucky2337.itch.io/escape-dungeon"
  },
  {
    title: "Escape The Dungeon 2",
    description: "You are escaping from the dungeons! But version 2 :D",
    date: "24.01.2023",
    link: "https://lucky2337.itch.io/escape-the-dungeon-2"
  },
  {
    title: "1 minute game",
    description: "This game was created in a minute!",
    date: "09.01.2023",
    link: "https://lucky2337.itch.io/1-minute-game"
  },
  {
    title: "Reaction Game",
    description: "A game in which you test your reaction time.",
    date: "04.01.2023",
    link: "https://lucky2337.itch.io/reaction-game"
  }
];

const gamesContainer = document.querySelector("#games-container");

for (let i = 0; i < games.length; i++) {
  const game = games[i];

  const gameElement = document.createElement("div");
 gameElement.innerHTML = <h2>${game.title}</h2> <p>${game.description}</p> <p>${game.date}</p> <a href="${game.link}" target="_blank">Play now</a> ;

gamesContainer.appendChild(gameElement);
}

// Kategorie gier

const categories = [
{
name: "Game Jam",
games: [
games[0],
games[2]
]
},
{
name: "Escape Games",
games: [
games[0],
games[1]
]
},
{
name: "Quick Games",
games: [
games[2]
]
}
];

const categoriesContainer = document.querySelector("#categories-container");

for (let i = 0; i < categories.length; i++) {
const category = categories[i];

const categoryElement = document.createElement("div");
categoryElement.innerHTML = <h2>${category.name}</h2>;

const gamesList = document.createElement("ul");
for (let j = 0; j < category.games.length; j++) {
const game = category.games[j];
const gameItem = document.createElement("li");
gameItem.innerHTML = `
  <h3>${game.title}</h3>
  <p>${game.description}</p>
  <p>${game.date}</p>
  <a href="${game.link}" target="_blank">Play now</a>
`;

gamesList.appendChild(gameItem);
}

categoryElement.appendChild(gamesList);
categoriesContainer.appendChild(categoryElement);
}
