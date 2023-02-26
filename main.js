var caixa = document.getElementById('caixa')
var itens = []
var soma = 0
//Função para adicionar os valores de input no select('caixa')
function guardar() {
    var number = document.getElementById('num').value

    if(number <= 0 || number > 100 || number.length == 0) {
        alert('Número inválido ou não identificado')
    } else {
        var num = Number(number)
        let option = document.createElement('option')
        option.text = `Número adicionado (${num})`
        caixa.appendChild(option)
        itens.push(num)
    }
    return soma = soma + num
}
//Função para fazer o levantamento dos dados armazenados no select('caixa')
var frases = document.createElement('p')
function analisar() {
    var res = document.getElementById('res')
    if(itens.length == 0){
        alert('Caixa vazia. Por favor, adicione valores.')
    } else {
        var media = soma / itens.length
        itens.sort((a, b) => a - b)
        itens.reverse()
        frases.innerHTML = `Ao todo, temos ${itens.length} números cadastrados.<br> O maior valor informado foi ${itens[0]}.<br> Somado todos os valores, temos ${soma}. A média dos valores digitados é ${media}`
        res.appendChild(frases)
    }
}