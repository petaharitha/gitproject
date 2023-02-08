function test(){
let myobj={
    name:document.getElementById("username").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
};
let myobj_serialized=JSON.stringify(myobj);
console.log(myobj_serialized);
   localStorage.setItem("myobj",myobj_serialized);
console.log(localStorage);

let myobj_deserialized=JSON.parse(localStorage.getItem(myobj));
console.log(myobj_deserialized);
showUseronscreen(myobj_deserialized);
showUseronscreen(myobj_deserialized)
{
    var parentEle=document.getelementById("list of Items");
    parentEle.innerHTML=<li>$(myobj_deserialized.username) - $(myobj_deserialized.email) - $(myobj_deserialized.password)</li>
}
}