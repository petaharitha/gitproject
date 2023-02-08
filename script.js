function test(){
    //RETRIVING THE DATA
    var uid=document.getElementById("username").value;
    var em=document.getElementById("email").value;
    var pw=document.getElementById("password").value;
    alert(uid+em+pw);
//STORING THE DATE IN LOCALSTORAGE

var user=localStorage.setItem("uid",uid);
var user=localStorage.setItem("em",em);
var user=localStorage.setItem("pw",pw); 

}