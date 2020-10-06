const dayArray = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
let taskCounter = 0

const newTask = () =>{
    const task = document.getElementById("tarefa")
    if (task.value === ""){
        alert ("Insira uma tarefa válida.")
        return
    }
    let taskAdded = task.value
    task.value = ""
    return taskAdded
}

const valueDayOfWeek = () =>{
    const weekday = document.getElementById("dias-semana")
    let dayAdded = weekday.value
    return dayAdded
}

const addUnorderedList = (day) =>{
    const container = document.getElementById(`${day}`)

    if (container.innerHTML === ""){
        container.innerHTML = `<ul id=${day + "-list"}></ul>`
    }
}

const addListItem = () =>{
    addUnorderedList(valueDayOfWeek())
    const unorderedList = document.getElementById(`${valueDayOfWeek() + "-list"}`)
    taskCounter++
    taskName = 'taskNumber' + taskCounter
    unorderedList.innerHTML += `<li id=${taskName} onclick="lineThroughText(${taskName})">${newTask()}</li>`
}

const eraseTasks = () =>{
    if(confirm("Você tem certeza? Essa ação é irreversível")){
        let dayDiv
        for (let i=0; i < dayArray.length; i++){
            dayDiv = document.getElementById(`${dayArray[i]}`)
            dayDiv.innerHTML = ""
        }
    }
}

const lineThroughText = (taskId) =>{
    const target = document.getElementById(`${taskId}`)
    target.style.textDecoration = "line-through"
}