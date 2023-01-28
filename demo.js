var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="goodbye";
//headerTitle.innerHTML='<h3>hello<h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//headerTitle.style.border='solid 3px #000';
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2';
//items[1].style.fontWeight='bold';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}
