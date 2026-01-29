const toDoList = [];
let button = document.querySelector("#addTask");
let tasksContainer = document.querySelector("#tasks");

button.addEventListener("click", addToDo);

function addToDo()
{
    const input = document.querySelector("#input");
    const taskName = input.value;

    toDoList.push(taskName);
    console.log(toDoList);

    input.value = '';

    renderToDoList();
}

function renderToDoList()
{
    let toDoListHTML = '';

    for(let i = 0; i < toDoList.length; i++)
    {
        const toDo = toDoList[i];
        const html = `<p class = "task">${toDo} <button class ="delete">Delete</button></p>`;
        toDoListHTML += html;
    }

    tasksContainer.innerHTML = toDoListHTML
}