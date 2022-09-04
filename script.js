// Função para mostrar os valores
function showDisplay(val) {
    document.getElementById("calc").value += val
}
// Função para avaliação
function solve() {
    let x = document.getElementById("calc").value
    let y = eval(x)
    document.getElementById("calc").value = y
}
// Função para limpar o painel
function clr() {
    document.getElementById("calc").value = ""
}
