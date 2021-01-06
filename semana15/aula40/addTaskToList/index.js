const taskList = ["Fazer desafios", "Beber água"]
const newTask = process.argv[2]

taskList.push(newTask)
console.table(taskList)