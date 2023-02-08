let myobj={
    name:"haritha",
    age:26
};
let myobj_serialized=JSON.stringify(myobj);
console.log(myobj_serialized);
   localStorage.setItem("myobj",myobj_serialized);
console.log(localStorage);

let myobj_deserialized=JSON.parse(localStorage.getItem(myobj));
console.log(myobj_deserialized);