const todoList = [];

class TodoList {
  constructor(listElementParam) {
    this.todoListElement = listElementParam;
  }

  add(todoText) {
    const todoObject = {
      id: todoList.length,
      todoText: todoText,
    };
    todoList.push(todoObject);
    this.display();
  }
  display() {
    // We are adding the last item of todoList array.
    let item = todoList[todoList.length - 1];
    // Now, we are creating inside of the ul tag.
    let liDiv = document.createElement('div');
    let aElement = document.createElement('a');
    let listicon = document.createElement('i');
    listicon.innerText = "delete";
    listicon.classList = "material-icons md-18";
    let listElement = document.createElement('li');
    listElement.innerText = item.todoText;
    listElement.setAttribute("data-id", item.id);
    this.todoListElement.appendChild(liDiv);
    liDiv.appendChild(aElement);
    liDiv.appendChild(listElement);
    aElement.appendChild(listicon);
    // if I click list element
    listElement.addEventListener("click", () => {
      if (listElement.classList == "") listElement.classList = "checked"
      else listElement.classList = "";
    });
    // if I click delete icon
    aElement.addEventListener("click",() => {
     aElement.parentElement.remove()
    })
  
  }
}
const myUL = document.querySelector("#myUL");
const myTodoList = new TodoList(myUL);
document.querySelector("#todo_button").addEventListener("click", function () {
  const todoText = myInput.value;
  myTodoList.add(todoText);
  document.querySelector("#myInput").outerHTML = `<input type="text" id="myInput" placeholder="Add..."  />`;
})