import _ from 'lodash';
import './style.css';
import img from './images/img.jpg';
import printMe from './modules/print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImg = new Image();
  myImg.src = img;
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
