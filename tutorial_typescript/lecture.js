var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " * " + numberTwo;
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.appendChild(input);
var button = document.createElement('button');
button.textContent = '입력';
form.appendChild(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.onsubmit = function (e) {
    e.preventDefault();
    if (Number(input.value) === numberTwo * numberOne) {
        resultDiv.innerText = '정답입니다.';
        setTimeout(function () { return window.location.reload(); }, 3000);
    }
    else {
        resultDiv.innerText = '땡 입니다.';
        resultDiv.innerText += "\uB2F5 : " + numberTwo * numberOne;
        setTimeout(function () { return window.location.reload(); }, 3000);
    }
    console.log('D');
};
