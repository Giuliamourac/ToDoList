const toDoList = [];
let addButton = document.querySelector("#addTask");
let tasksContainer = document.querySelector("#tasks");

addButton.addEventListener("click", addToDo);

function addToDo()
{
    const input = document.querySelector("#input");
    const taskName = input.value;
    const dateInput = document.querySelector("#date");
    const date = dateInput.value;

    if(taskName === "")
    {
        window.alert("Enter something valid");
    }
    else
    {
        toDoList.push({name: taskName, dueDate: date});

        input.value = '';

        renderToDoList();
    }
}

function delToDo(index) 
{
    toDoList.splice(index, 1);
    renderToDoList();
}


function renderToDoList()
{
    let toDoListHTML = '';

    for(let i = 0; i < toDoList.length; i++)
    {
        const toDo = toDoList[i];
        toDoListHTML += 
        `<p class = "task">
            ${toDo.name} ${toDo.dueDate} <button class ="delete" onclick="delToDo(${i})">Delete</button>
        </p>`;
    }

    tasksContainer.innerHTML = toDoListHTML
}