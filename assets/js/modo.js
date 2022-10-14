let buttonTema = document.getElementById('botao-tema')

const imagemButton = {
    claro: './assets/imagens/tema-claro.svg',
    escuro: './assets/imagens/tema-escuro.svg'
}

const trocarTema = () => {
    if(buttonTema.className == 'tema claro'){
        buttonTema.src = imagemButton.escuro
        buttonTema.className = 'tema escuro'
        tema()
    }else{
        buttonTema.src = imagemButton.claro
        buttonTema.className = 'tema claro'
        tema()
    }
}

const tema = () => {
    let imagemTitulo = document.getElementById('img-titulo')
    let textTitulo = document.getElementById('titulo')
    let header = document.getElementsByTagName('header')
    let section = document.querySelector('.campo-lista')
    let botaoAdd = document.querySelector('#botao-adicionar')

    if(buttonTema.className == 'tema claro'){
        imagemTitulo.src = 'assets/imagens/imagem-lista-tema-claro.png'
        textTitulo.style.color = 'black'
        header[0].style.backgroundColor = 'var(--headerClaro)'
        document.body.style.backgroundColor = 'var(--fundoClaro)'
        document.body.style.color = 'Black'
        section.style.backgroundColor = 'white'
        botaoAdd.style.backgroundColor = 'var(--botaoClaro)'
    }else{
        imagemTitulo.src = 'assets/imagens/imagem-lista-tema-escuro.png'
        textTitulo.style.color = 'white'
        header[0].style.backgroundColor = 'var(--headerEscuro)'
        document.body.style.backgroundColor = 'var(--fundoEscuro)'
        document.body.style.color = 'white'
        section.style.backgroundColor = 'var(--ListEscuro)'
        botaoAdd.style.backgroundColor = 'var(--ListEscuro)'
    }

}

