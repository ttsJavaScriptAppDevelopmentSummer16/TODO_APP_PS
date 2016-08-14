var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var button = query('button#taskadd');


function addToDo(){
  var newTask = document.createElement('li');
  newTask.innerHTML = query('input#taskadd').value
  query('ul.listitems').appendChild(newTask);
  newListElements = Array.from(queryAll('ul.listitems li'));
  newListElements[newListElements.length -1].className = "item";
  query('input#taskadd').value = "";
  query('input#taskadd').placeholder = "Enter New Task Here";
}

// Listener for when an a task is entered and submitted via the submit button
button.addEventListener('click', function(event){
  addToDo();
})


var input = query('input#taskadd');

//Listener to remove placholder value of input form on mouseenter
input.addEventListener('mouseenter', function(event){
  event.target.placeholder = '';
})

//Listener for When user finishes typing in input form and presses enter to submit form instead of submit button
input.addEventListener('keyup',function(event){
  if (event.keyCode === 13){
    addToDo();
  }
})

var items = query('ul.listitems');

// Listener to remove item from task list when click event occurs on list elements
items.addEventListener('click', function(event){
// Why does target work for this,but not eventTarget?
// Is eventTarget for the parent element and target is (this)?
  event.target.remove();
})
