var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//a & b refer (below) to the instance of the element in students array above
students.sort(function(a, b){
  if(a.name < b.name){ // < or > are used for strings, not -
    return -1 // since a.name is smaller than b.name (line above), a is put before b
  }else if (a.name > b.name){
    return 1 //this makes a placed after b
  }else if (a.name == b.name){
    return b.age - a.age; //this means the two students named Alex sorted by age, descending
  }
});

console.log(students)
