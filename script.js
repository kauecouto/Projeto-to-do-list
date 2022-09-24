var checkbox
var i = 0

function adicionaTarefa() {
    let inputTarefa = document.getElementById('input-tarefa')
    let tarefa = document.getElementById('input-tarefa').value
    let lista = document.getElementById('lista')
    let alerta = document.getElementById('alerta')
    let aviso = document.getElementById('aviso')

    if(tarefa.length <= 0){
        alerta.style.display = 'inline-block'
    }else{
        alerta.style.display = 'none'
        aviso.style.display = 'none'
        let campoTarefa = document.createElement('div')
        campoTarefa.setAttribute('class', 'campo-tarefa')
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('class', 'checkbox')
        let classTarefa = tarefa.split(' ')
        classTarefa = classTarefa.join('')
        checkbox.setAttribute('onclick', `riscaTarefa('${classTarefa}', ${i})`)
        let textoTarefa = document.createElement('p')
        textoTarefa.setAttribute('class', `${classTarefa}`)
        textoTarefa.innerHTML = tarefa
        campoTarefa.appendChild(checkbox)
        campoTarefa.appendChild(textoTarefa)
        lista.appendChild(campoTarefa)
        i++ 
    }
    checkbox = document.getElementsByClassName('checkbox')
    inputTarefa.value = ""
    inputTarefa.focus()
}

function riscaTarefa(classe, i){
    let tarefa = document.querySelectorAll(`.${classe}`)
    if(checkbox[i].checked){
        if(tarefa[i]){
            tarefa[i].style.textDecoration = 'line-through'
            tarefa[i].style.opacity = '0.5'
        }else{
            tarefa = document.querySelector(`.${classe}`)
            tarefa.style.textDecoration = 'line-through'
            tarefa.style.opacity = '0.5'
        }
    }else{
        if(tarefa[i]){
            tarefa[i].style.textDecoration = 'none'
            tarefa[i].style.opacity = '1'
        }else{
            tarefa = document.querySelector(`.${classe}`)
            tarefa.style.textDecoration = 'none'
            tarefa.style.opacity = '1'
        }
    }
    
}

let botaoClaro = document.getElementById('botao-claro')
let botaoEscuro = document.getElementById('botao-escuro')

let imagemTitulo = document.getElementById('img-titulo')
let textTitulo = document.getElementById('titulo')
let header = document.getElementsByTagName('header')
let section = document.getElementsByTagName('section')
let botaoAdd = document.querySelector('#botao-adicionar')

function temaEscuro(){
    imagemTitulo.src = 'assets/imagens/imagem-lista-tema-escuro.png'
    textTitulo.style.color = 'white'
    header[0].style.backgroundColor = 'var(--headerEscuro)'
    document.body.style.backgroundColor = 'var(--fundoEscuro)'
    document.body.style.color = 'white'
    section[0].style.backgroundColor = 'var(--ListEscuro)'
    botaoAdd.style.backgroundColor = 'var(--ListEscuro)'
    botaoEscuro.style.border = '2px solid white'
    botaoEscuro.style.boxShadow = '0px 0px 15px white'
}

function temaClaro(){
    imagemTitulo.src = 'assets/imagens/imagem-lista-tema-claro.png'
    textTitulo.style.color = 'black'
    header[0].style.backgroundColor = 'var(--headerClaro)'
    document.body.style.backgroundColor = 'var(--fundoClaro)'
    document.body.style.color = 'Black'
    section[0].style.backgroundColor = 'white'
    botaoAdd.style.backgroundColor = 'var(--botaoClaro)'
    botaoClaro.style.border = '2px solid black'
    botaoClaro.style.boxShadow = '0px 0px 12px rgba(0, 0, 0, 0.559)'
    botaoClaro.style.backgroundColor = 'white'
}

botaoEscuro.addEventListener('click', temaEscuro)
botaoClaro.addEventListener('click', temaClaro)