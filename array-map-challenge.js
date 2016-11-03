var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(elm){ //elm refers to the element of input
  var hypotenuseSquared = Math.pow(elm.x, 2) + Math.pow(elm.y, 2);
  return Math.sqrt(hypotenuseSquared);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
