'use strict';

const names = ["John", "Po", "Sam", "Withersbean"];

const mapFunction = function(data, _callback){
  let newArray = [];

  data.forEach(function(elm){
    newArray.push(_callback(elm));
  });

  return newArray;
}

const results = mapFunction(names, function(item){
  return item.length;
});

console.log(results);
