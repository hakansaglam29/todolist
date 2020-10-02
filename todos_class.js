/*
 * 1) TODO'ya tekrar basılınca, todo durumu eski haline gelsin
 *    İpucu (Tek bir satırda değişiklik yapılacak)
 *
 * 2) Todo silme operasyonu
 **/

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
      let item = todoList[todoList.length - 1];
      let liDiv = document.createElement('div');
      let aElement = document.createElement('a');
      let listicon = document.createElement('i');
      listicon.setAttribute("icon-data-id", item.id);
      listicon.innerText = "delete";
      listicon.classList = "material-icons md-18";
      let listElement = document.createElement('li');
      listElement.innerText = item.todoText;
      listElement.setAttribute("data-id", item.id);
      listElement.addEventListener("click", function (e) {
        if (listElement.classList == "") listElement.classList = "checked"
        else listElement.classList = "";
    });
    aElement.addEventListener("click",() => {
     aElement.parentElement.innerHTML = ""

    })
    this.todoListElement.appendChild(liDiv);
    liDiv.appendChild(aElement);
    liDiv.appendChild(listElement);
    aElement.appendChild(listicon);

  }
}

const myTodoList = new TodoList(document.querySelector("#myUL"));

document.querySelector("#todo_button").addEventListener("click", function () {
  const todoText = document.querySelector("#myInput").value;
  myTodoList.add(todoText);
  document.querySelector("#myInput").value = "";
});