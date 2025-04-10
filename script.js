let todolist = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList(){
       let todoListElement = '';
       for(let i = 0; i < todolist.length; i++){
           let todo = todolist[i];
           let {name,dueDate,duetime} = todo
           let html = `
           <p>
           ${name} ${dueDate} ${duetime}
           <button onclick ="
            todolist.splice(${i}, 1);
              localStorage.setItem('todoList', JSON.stringify(todolist));
            renderTodoList();
           ">Delete</button>
           </p>`;
           
           todoListElement += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListElement;
}


function addTodo(){
   const inputElement= document.querySelector('.js-Todo-List');
   const name = inputElement.value;


   const dateElement = document.querySelector('.js-due-date');
   const dueDate = dateElement.value;

   const timeElement = document.querySelector(".js-due-time");
   const duetime = timeElement.value;

   todolist.push({name,dueDate,duetime});
  

   renderTodoList();
}