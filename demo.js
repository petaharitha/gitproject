var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="goodbye";
headerTitle.innerHTML='<h3>hello<h3>';
//headerTitle.style.borderBottom='solid 3px blue';
headerTitle.style.border='solid black';
var title=document.getElementsByClassName('title');
console.log(title);
console.log(title[0]);
for(var i=0;i<title.length;i++)
{
    title[0].style.backgroundcolor='yellow';
}