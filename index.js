const shape = document.createElement('div');
shape.style.backgroundColor = 'grey';
shape.style.marginLeft = '50%';
shape.style.marginRight = '50%';
shape.style.marginTop = '20%';
shape.style.height = '50px';
shape.style.width = '50px';
document.body.appendChild(shape);

document.body.style.margin = '0';

const container = document.createElement('div');
container.style.backgroundColor = 'grey';
container.style.wordWrap = 'break-word';
container.style.marginTop = '20%';
container.style.height = '295px';
container.style.width = '100%';
document.body.appendChild(container);

const text1 = document.createElement('p');
text1.innerText = 'Background Color';
container.appendChild(text1);
const input1 = document.createElement('input');
input1.placeholder = 'ex. grey, red, blue, etc...';
container.appendChild(input1);
const button1 = document.createElement('button');
button1.innerText = 'Enter';
container.appendChild(button1);

button1.addEventListener('click', function() {
  shape.style.backgroundColor = input1.value;
})

const text2 = document.createElement('p');
text2.innerText = "Border Radius";
container.appendChild(text2);
const input2 = document.createElement('input');
input2.placeholder = 'ex. 5, 10, 20, etc...';
container.appendChild(input2);
const button2 = document.createElement('button');
button2.innerText = 'Enter';
container.appendChild(button2);

button2.addEventListener('click', function() {
  shape.style.borderRadius = input2.value + 'px';
})

const text3 = document.createElement('p');
text3.innerText = "Width";
container.appendChild(text3);
const input3 = document.createElement('input');
input3.placeholder = 'ex. 5, 10, 20, etc...';
container.appendChild(input3);
const button3 = document.createElement('button');
button3.innerText = 'Enter';
container.appendChild(button3);

button3.addEventListener('click', function() {
  shape.style.width = input3.value + 'px';
})

const text4 = document.createElement('p');
text4.innerText = "Height";
container.appendChild(text4);
const input4 = document.createElement('input');
input4.placeholder = 'ex. 5, 10, 20, etc...';
container.appendChild(input4);
const button4 = document.createElement('button');
button4.innerText = 'Enter';
container.appendChild(button4);

button4.addEventListener('click', function() {
  shape.style.height = input4.value + 'px';
})

const text5 = document.createElement('p');
text5.innerText = "Text";
container.appendChild(text5);
const input5 = document.createElement('input');
input5.placeholder = 'ex. cat, dog, wrench, etc...';
container.appendChild(input5);
const button5 = document.createElement('button');
button5.innerText = 'Enter';
container.appendChild(button5);

button5.addEventListener('click', function() {
  shape.innerText = input5.value;
})
