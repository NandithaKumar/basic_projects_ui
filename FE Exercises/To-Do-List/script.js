let toDoList = [];

function addItem() {
  const toDoItem = document.querySelector('.to-do-item');
  const date = document.querySelector('.date');
  //console.log(toDoItem, date);
  const toDo = toDoItem.value;
  const completeOn = date.value;
  const toDoObj = {
    toDo,
    completeOn,
  };
  toDoList.push(toDoObj);
  toDoItem.value = '';
  date.value = '';
  renderList();
}

function renderList() {
  const list = document.querySelector('.container');
  let html = '';
  toDoList.forEach(function (toDoObj, idex) {
    const { toDo, completeOn } = toDoObj;
    console.log(toDo, completeOn);
    html += `<div>${toDo}</div>  
    <div>${completeOn}</div>
    <button class="delete" onclick="toDoList.splice(${idex},1);
    renderList()
    ">Delete</button>`;
  });

  console.log(toDoList);
  list.innerHTML = html;
}
