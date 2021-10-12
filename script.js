console.log("Well look at that, this is showing up in your console!");

// REMEMBER to save to see any changes on the browser!

/* 
Add quotes to a selection of Code.
1. Select/Highlight a section of code.
2. Press the ' or " key.

TRY IT OUT! Change the number below to a string.
The the console should show "testNumber variable is a string".
*/
let testNumber = 123456789;
console.log(testNumber);
console.log("testNumber variable is a", typeof testNumber);

/*
Add (), {}, [] to a selection of code.
1. Select/Highlight a section of code.
2. Press (, {, [ key.

TRY IT OUT!
Add various brackets to the string below using this new shortcut!

It should look similar to this:
"Add () around this: (parentheses)  Add {} around this: {curly brackets}, or add [] around this: [square brackets] "
*/

let testString =
  "Add () around this: parentheses  Add {} around this: curly brackets, or add [] around this: square brackets ";

console.log(testString);

/*
You can select multiple instances of the same code with a simple keyboard shortcut.
1. Select/Highlight a section of code.
2.Press the combo keys, for Mac: cmd + D  and for Windows: ctrl + D

TRY IT OUT! Below is a variable used multiple times in the code.
Use the new selector shortcut to change the variable's name on all its instances.
*/

let thisVariable = "I am a string!";

console.log(thisVariable);

thisVariable = "Now I'm a different string!";

console.log(thisVariable);

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}
let element = document.querySelector("h1");
element.innerHTML = "HELLO <br> I've changed it";
element.classList.add("header-tag");

let paragraphElement = document.querySelector("#paragraph");

let newElement = document.createElement("div");
newElement.innerHTML = "<strong>Did</strong> it work?";
newElement.style.color = "pink";
paragraphElement.append(newElement);

function createPokemon(pokeName, nickname) {
  let pokemonList = document.querySelector(".pokemonList");

  let pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("pokemon");
  pokemonDiv.classList.add(pokeName);

  let title = document.createElement("h4");
  let sprite = document.createElement("img");
  let type = document.createElement("p");

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then(function (pokemon) {
      console.log(pokemon);
      sprite.setAttribute("src", pokemon.sprites.front_default);
      title.innerHTML = `${capitalize(pokemon.name)} <br> "${nickname}"`;
      type.innerHTML =
        pokemon.types.length > 1
          ? `${capitalize(pokemon.types[0].type.name)}/${capitalize(
              pokemon.types[1].type.name
            )}`
          : `${capitalize(pokemon.types[0].type.name)}`;
    });
  pokemonDiv.append(title, sprite, type);
  pokemonList.append(pokemonDiv);
}
let myFavPokemon = [
  { name: "scizor", nickname: "Pincher" },
  { name: "hitmontop", nickname: "Twist" },
  { name: "haunter", nickname: "Spirit" },
  { name: "lucario", nickname: "Anubis" },
  { name: "flygon", nickname: "Draco" },
  { name: "typhlosion", nickname: "Burn Boy" },
  { name: "articuno", nickname: "Evie" },
];

myFavPokemon.map((pokemon) => createPokemon(pokemon.name, pokemon.nickname));
// createPokemon("scizor", "Pincher");
// createPokemon("hitmontop", "Twist");
// createPokemon("lucario", "Anubis");
// createPokemon("haunter", "Spirit");
// createPokemon("quilava", "Burn Boy");
// createPokemon("flygon", "Draco");
