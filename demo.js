var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="goodbye";
//headerTitle.innerHTML='<h3>hello<h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//headerTitle.style.border='solid 3px #000';
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].style.fontWeight='bold';
li[2].style.backgroundColor='green';
for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
}
