document.addEventListener('DOMContentLoaded', function () {
   const botaodeacessibilidade = document.getElementById('botao-acessibilidade')
   const opcoesdeacessibilidade = document.getElementById('opcoes-acessibilidade')


   botaodeacessibilidade.addEventListener('click' ({
           botaodeacessibilidade, classlist, toggle }) => { }('rotacao-botao')
    opcoesdeacessibilidade.classList.toggle('apresenta-lista')
   }))
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

})