let i = 0
const botaoAdicionar = document.getElementById('botao-adicionar')
const checkbox = document.querySelector('.checkbox')

const task = {
    task: ''
}

const criarTarefa = () => {
    const inputTarefa = document.getElementById('input-tarefa')
    const tarefa = inputTarefa.value
    const newTarefa = new Tarefa(tarefa, i)
    newTarefa.adicionaTarefa()
    task.task = tarefa
    adicionaLocalStorage(task)
    inputTarefa.value = ""
    inputTarefa.focus()
    i++
}

const riscaTarefa = (classe, i) => {
    let tarefa = document.querySelector(`#${classe}${i}`)
    let checkbox = document.querySelector(`#checkbox${i}`)
    if(checkbox.checked){
            tarefa.className = `${classe}${i} checked`
    }else{
            tarefa.className = `${classe}${i} not-checked`
    }
}

const deletaTarefa = (conteudo, i) =>{
    const lista = document.querySelector('#lista')
    const campoTarefa = document.getElementsByClassName(`campo-tarefa ${i}`)
    lista.removeChild(campoTarefa[0])
    deletaLocalStorage(conteudo,i)
}

// LocalStorage 

const getLocalStorage = () => JSON.parse(localStorage.getItem('tasks')) ?? []
const setLocalStorage = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

const adicionaLocalStorage = (task) => {
    const tasks = getLocalStorage()
    tasks.push(task)
    setLocalStorage(tasks)
}

const deletaLocalStorage = (conteudo, i) => {
    const tasks = getLocalStorage()
    const newTasks = tasks.filter((tasks,index) => tasks.task !== conteudo)
    setLocalStorage(newTasks)
}

const requestTarefasLocalStorage = () => {
    const tasks = getLocalStorage()
    if(tasks){
        tasks.map((task, index) => {
            const taskHTML = new Tarefa(task.task, index)
            taskHTML.adicionaTarefa()
        })
    } 
}
requestTarefasLocalStorage()

botaoAdicionar.addEventListener('click', criarTarefa)