class Tarefa{
    conteudo;
    index;

    constructor(conteudo, index){
        this.conteudo = conteudo
        this.index = index
    }

    adicionaTarefa(){
        const lista = document.querySelector('#lista')
        const alerta = document.getElementById('alerta')
        const aviso = document.getElementById('aviso')
        const classTarefa = this.conteudo.split(' ').join('')

        if(this.conteudo.length <= 0){
            alerta.style.display = 'inline-block' 
            console.log(this.conteudo)
        }else{
            alerta.style.display = 'none'
            aviso.style.display = 'none'
            let novaTarefa = `
                <div class="campo-tarefa ${this.index}">
                    <img src="assets/imagens/lixeira.svg" class="lixeira" alt="lixeira" onclick="deletaTarefa('${this.conteudo}',${this.index})">
                    <input type="checkbox" class="checkbox" id="checkbox${this.index}" onclick="riscaTarefa('${classTarefa}', ${this.index})">
                    <p id="${classTarefa}${this.index}">${this.conteudo}</p>
                </div>
            `

            lista.innerHTML += novaTarefa
        }
    }
}