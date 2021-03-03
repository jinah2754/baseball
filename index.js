Math.floor(Math.random() *10);

var number = [];
number[0] = Math.floor(Math.random() * 10);
do {
    number[1] = Math.floor(Math.random() * 10);
} while(number[1] === number[0])
do {
number[2] = Math.floor(Math.random()*10);
} while(number[2] === number[0] || number[2] === number[1])
do {
number[3] = Math.floor(Math.random() *10);
} while(number[3] === number[0] || number[3] === number[1] || number[3] ===number[2])

var list = [0,1,2,3,4,5,6,7,8,9];
var number = [];
for (var i = 0; i < 4; i++) {
var select = Math.floor(Math.random() * list.length);
console.log('list', list, 'number', number, 'length', list.length);
number[i] = list.splice(select, 1)[0];
}
