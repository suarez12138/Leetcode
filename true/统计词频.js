


var map=new Map();
map.set("b","8");
map.set("c","10");
map.set("a","1");
map.set("d","7");
map.set("e","3");


var arr=Array.from(map);






let map2={"this":2,"is":4,'mine':1,"how":12}
//
arr.sort((a,b)=>a[1]-b[1]);
//
// let arr=Array.from(map);
console.log(arr);
var result = new Map(arr.map(i => [i[0], i[1]]));
console.log(result)
//
// arr.sort((a,b)=>a[1]-b[1]);
//
// console.log(arr);


// for ((key,value) of map){
//     console.log()
// }