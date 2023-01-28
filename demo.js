//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="goodbye";
//headerTitle.innerHTML='<h3>hello<h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//headerTitle.style.border='solid 3px #000';
//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].style.fontWeight='bold';
//li[2].style.backgroundColor='green';
//for(var i=0;i<li.length;i++)
//{
 //   li[i].style.fontWeight='bold';
//}
//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//var odd=document.querySelectorAll('li:nth-child(odd');
//for(var i=0;i<odd.length;i++)
//{
  //  odd[i].style.backgroundColor='green';
//}

//TRAVERSING THE DOM
var itemList=document.querySelector('#items');
//PARENTNODE
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='blue';
//console.log(itemList.parentNode.parentNode.parentNode);
//PARENTeLEMENT
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='blue';
//console.log(itemList.parentElement.parentElement.parentElement);
//CHILDNODES
//console.log(itemList.childNode);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';
//Firstchild
//console.log(itemList.firstChild);
//firstchildelement
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello 1';
//lastchild
//console.log(itemList.lastChild);
//lastelementchild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello 1';
//nextsibling
//console.log(itemList.nextSibling);
//nextElementsibling
//console.log(itemList.nextElementSibling);
//previoussibling
console.log(itemList.previousSibling);
//previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//create Element
//create div
var newDiv=document.createElement('Div');
console.log(newDiv);
//add class
newDiv.ClassName='hello 1';
newDiv.id='hello 1';
//add attribute
newDiv.setAttribute('title','hello Div');
//create text node
var newDivText=document.createTextNode('hello world');
console.log(newDiv);
//add text to div
newDiv.appendChild(newDivText);
console.log(newDivText);
var container=document.querySelector('header','container');
var h1=document.querySelector('header h1');
//container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';

