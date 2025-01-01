// Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move); // Output: 0
// String Enums
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var currentStatus = Status.Active;
console.log(currentStatus); // Output: ACTIVE
// Heterogeneous Enums
var Mixed;
(function (Mixed) {
    Mixed[Mixed["Yes"] = 1] = "Yes";
    Mixed[Mixed["No"] = 0] = "No";
})(Mixed || (Mixed = {}));
console.log(Mixed.No); // Output: 0
console.log(Mixed.Yes); // Output: 1
