'use strict';
const genNew = document.getElementById('genNew'); 
const colorSpan = document.getElementById('color'); 
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    colorSpan.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  colorSpan.textContent = '';
  setBg();