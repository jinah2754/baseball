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
