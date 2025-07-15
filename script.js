let screen = document.getElementById('display');

function append(value) {
    screen.value += value;
}


const data ={
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    point: '.',
    divide: '/',
    multiply: '*',
    substract: '-',
    add: '+'
};

for (let key in data) {
  document.getElementById(key).addEventListener('click', () => {
    screen.value(data[key]);
  });
}

document.getElementById("clearScreen").addEventListener('click',()=>{
    screen.value = " ";
})

document.getElementById('isequal').addEventListener('click', () => {
    const input =screen.value.replace(/[^-()\d/*+.]/g, '');
    const result = Function('return('+ input+')')();
    screen.value = result;
});


