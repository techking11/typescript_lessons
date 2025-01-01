// Generics function
function identify(value) {
    return value;
}
console.log(identify("Justin")); // Justin
console.log(identify(23)); // 23
// Generics Class
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log(numberBox.getContents()); // 123
// Generics Constraints
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // 5
logLength([1, 2, 3]); // 3
