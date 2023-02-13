/*
// 1.0
let a = Number(prompt(''));
let ggg // we could've defined it inside the if condition using var, cuz it'll be gloubal already, but using let is always safer for begginers. 
if (a > 0) {
  ggg = function () {
    console.log("!");
  };
} else {
  ggg = function () {
    console.log("!!");
  };
}
// ggg()

// 2.0

function aaa(num, func) {
  return func(func(num));
}

const result = aaa(2, function(x) { return x*x });
console.log(result);

*/



// 7.0
const clouser = () => {
  let x = 0;
  return () => {
    return ++counter;
  };
};
let func = clouser();
// func()  // 1
// func()  // 2
// func()  // 3
// func()  // 4

// 8.0

let func8 = () => {
  let c = 1;
  return function () {
    this.innerHTML = c;
    return c++;
  };
};
let buttons = document.querySelectorAll(".e");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", func8(this));
}

// 9.0

let colors = ["red", "blue", "green", "yellow", "brown"];
const texts = document.querySelectorAll("#p");

function func9() {
  let c = 0;
  return function () {
    this.style.color = colors[c];
    c++;
    if (c == colors.length) c = 0;
  };
}
// (let i = 0; i < texts.length; i++)
for (i of texts) {
  i.addEventListener("click", func9());
}

// 10.0

let func10 = function () {
  let f1 = 0;
  let f2 = 1;
  let temp;
  return function () {
    this.nextElementSibling.innerHTML = f1;
    temp = f1;
    f1 = f2;
    f2 = temp + f1;
  };
};

let buttons_fib = document.querySelectorAll("button#button");
for (i of buttons_fib) {
  i.addEventListener("click", func10());
}



// 12.0 


function generateRandomNumbers() {
  let generatedNumbers = [];
  
  return function() {
    if (generatedNumbers.length === 100) {
      generatedNumbers = [];
    }
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    while (generatedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
    button_random.nextElementSibling.innerHTML = randomNumber
    generatedNumbers.push(randomNumber);
    return randomNumber;
  }
}

let uniqueRandom = generateRandomNumbers();
let button_random = document.querySelector('.random')
button_random.addEventListener("click", uniqueRandom)





// 11.0

const conteiner = document.querySelector('#conteiner');

function makeInputWithHistory() {
  let inputHistory = [];
  let currentIndex = 0;

  const input = document.createElement('input');
  const prevButton = document.createElement('button');
  prevButton.textContent = '←';
  const nextButton = document.createElement('button');
  nextButton.textContent = '→';

  input.addEventListener('change', function() {
    inputHistory.splice(currentIndex + 1, inputHistory.length - currentIndex - 1);
    inputHistory.push(input.value);
    currentIndex = inputHistory.length - 1;
  });

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      input.value = inputHistory[currentIndex];
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < inputHistory.length - 1) {
      currentIndex++;
      input.value = inputHistory[currentIndex];
    }
  });

  const inputDiv = document.createElement('div');
  inputDiv.appendChild(prevButton);
  inputDiv.appendChild(nextButton);
  inputDiv.appendChild(input);
  return inputDiv;
}

const input1 = makeInputWithHistory();
const input2 = makeInputWithHistory();

conteiner.appendChild(input1);
conteiner.appendChild(input2);