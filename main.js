var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//add item
function addItem(e)
{
    e.preventDefault();
    // get input value
    var newItem=document.getElementById('item').value;
    //create a new li element
    var li=document.createElement('li');
    //add class 
    li.className='list-group-item';
    //console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
   // create de button Element
   var deleteBtn=document.createElement('button');
   //add classes to del button
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('x'));
    //append button to li
    li.append(deleteBtn);
    //Append li to list
   itemList.appendChild(li);
}
//remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}
// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}