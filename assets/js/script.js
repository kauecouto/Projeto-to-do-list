let i = 0
const botaoAdicionar = document.getElementById('botao-adicionar')
const checkbox = document.querySelector('.checkbox')

const criarTarefa = () => {
    const inputTarefa = document.getElementById('input-tarefa')
    const tarefa = inputTarefa.value
    const newTarefa = new Tarefa(tarefa, i)
    newTarefa.adicionaTarefa()
    inputTarefa.value = ""
    inputTarefa.focus()
    i++
}

const riscaTarefa = (classe, i) => {
    let tarefa = document.querySelector(`#${classe}${i}`)
    let checkbox = document.querySelector(`#checkbox${i}`)
    if(checkbox.checked){
            tarefa.style.textDecoration = 'line-through'
            tarefa.style.opacity = '0.5'
    }else{
            tarefa.style.textDecoration = 'none'
            tarefa.style.opacity = '1'
    }
}

const deletaTarefa = (i) =>{
    console.log(i)
    const lista = document.querySelector('#lista')
    console.log(lista)
    const campoTarefa = document.getElementsByClassName(`campo-tarefa ${i}`)
    lista.removeChild(campoTarefa[0])
}

botaoAdicionar.addEventListener('click', criarTarefa)