let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let result = numberOne * numberTwo;

const word = document.createElement('div');
word.textContent = `${numberOne} * ${numberTwo}`;
document.body.append(word);

const form = document.createElement('form');
document.body.append(form);

const input = document.createElement('input');
input.type = 'number';
form.appendChild(input);

const button = document.createElement('button');
button.textContent = '입력';
form.appendChild(button);

const resultDiv = document.createElement('div');
document.body.append(resultDiv);

form.onsubmit = e => {
  e.preventDefault();
  if (Number(input.value) === numberTwo * numberOne) {
    resultDiv.innerText = '정답입니다.';
    setTimeout(() => window.location.reload(), 3000);
  } else {
    resultDiv.innerText = '땡 입니다.';
    resultDiv.innerText += `답 : ${numberTwo * numberOne}`;
    setTimeout(() => window.location.reload(), 3000);
  }
  console.log('D');
};
