const form = document.querySelector('#form')
const redField = document.querySelector('#inputRed')
const greenField = document.querySelector('#inputGreen')
const blueField = document.querySelector('#inputBlue')
const displayHex = document.querySelector('.displayHex')
const displayColor = document.querySelector('#displaycolor')
const redBlock = document.querySelector('.displayred')
const greenBlock = document.querySelector('.displaygreen')
const blueBlock = document.querySelector('.displayblue')
let HexNumber = ''

// listen to the form submit event
form.addEventListener('submit', function (event) {
  event.preventDefault()

  let r = Number(redField.value)
  let g = Number(greenField.value)
  let b = Number(blueField.value)

  checkInput(r)
  checkInput(g)
  checkInput(b)

  HexNumber = rgbToHex(r, g, b)
  console.log(rgbToHex(r, g, b))
  displayHex.innerHTML = HexNumber

  var style = document.createElement('style')
  style.innerHTML = `
  #displaycolor {
  background-color: ${HexNumber};
  }
  `
  displayColor.appendChild(style)

  var displayR = document.createElement('style')
  displayR.innerHTML = `
  .displayred {
  background-color: ${rgbToHex(r, 0, 0)};
  }
  `
  redBlock.appendChild(displayR)

  var displayG = document.createElement('style')
  displayG.innerHTML = `
  .displaygreen {
  background-color: ${rgbToHex(0, g, 0)};
  }
  `
  greenBlock.appendChild(displayG)

  var displayB = document.createElement('style')
  displayB.innerHTML = `
  .displayblue {
  background-color: ${rgbToHex(0, 0, b)};
  }
  `
  blueBlock.appendChild(displayB)
})


// identify input value 
function checkInput(num) {
  if (num <= 255 && num >= 0) {

  } else {
    alert('input value between 0~255')
  }
}

// rgb2hex function
function rgbToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}