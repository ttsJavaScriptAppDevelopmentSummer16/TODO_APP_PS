var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var button = query('button#taskadd');


button.addEventListener('click', function(event){
  var newTask = document.createElement('li');
  newTask.innerHTML = query('input#taskadd').value
  query('ul.listitems').appendChild(newTask);
  newListElements = Array.from(queryAll('ul.listitems li'));
  newListElements[newListElements.length -1].className = "item";
  query('input#taskadd').value = "";
  query('input#taskadd').placeholder = "Enter New Task Here";
})

var input = query('input#taskadd');
input.addEventListener('mouseenter', function(event){
  event.target.placeholder = '';
})

var items = query('ul.listitems');
console.log(items);

items.addEventListener('click', function(event){
// Why does target work for this,but not eventTarget?
// Is eventTarget for the parent element and target is (this)?
  event.target.remove();
})
