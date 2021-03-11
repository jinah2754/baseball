var stirng = "aBcD";
stirng.toUpperCase(); // "ABCD"
string.toLowerCase(); // "abcd"

var array = [1,3,5,7,9];
array.every(function(i) {
    return i % 2 === 1;
}); //true
array.every(function(i) {
    return i < 9;
}); //false

array.some(function(i) {
    return i === 9;
}); //true

Array.isArray('array?');
Array.isArray(['array?']);

var array = [45, 58, 374];
array.length;

var array = [10, 50, 20];
var array = [20, 50, 45];