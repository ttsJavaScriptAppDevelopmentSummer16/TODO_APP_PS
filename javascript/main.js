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
})
