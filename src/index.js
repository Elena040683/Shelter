import pikachu from './images/pikachu.png';
import {sum} from './helpers/sum.js';
import './styles/main.scss';

console.log("name");
console.log(sum(2, 3));
;
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#root");
app.append(heading, p);

// const img = document.createElement('img');
// img.src = pikachu;
// app.append(img);

app.insertAdjacentHTML('beforeend', `<img src=${pikachu}>`);