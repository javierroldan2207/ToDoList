
/*
    Cada tarea tendrá esta estructura:

    {
        id: 1,
        name: "Estudiar JavaScript",
        completed: false
    }
*/

// Recuperamos las tareas guardadas.
// Si no hay datos, comenzamos con un array vacío.


// Recuperamos el siguiente identificador.
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
// Elementos del DOM

let taskImput = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");


function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        
        // Le metemos el texto de la tarea
        li.textContent = task.name;

        // Si la tarea está completada, le añadimos una clase (opcional para tacharla luego)
        if (task.completed) {
            li.classList.add("completed");
        }

        // Añadimos el <li> dentro de nuestra lista <ul> (que guardamos en la variable 'list')
        list.appendChild(li);
    });
}

// EVENTOS

button.addEventListener("click", () =>{
    let text = taskImput.value;

    if(text != ""){

        let newTask = {
            id: nextId,
            name: text,
            completed: false
        }

        tasks.push(newTask);

        nextId++;
        localStorage.setItem("tasks" , JSON.stringify(tasks));

        renderTasks();

        taskImput.value = "";
    }
})
// Añadir tarea al pulsar el botón.


// Añadir tarea al pulsar Enter.

// Mostramos las tareas al cargar la página.

renderTasks();