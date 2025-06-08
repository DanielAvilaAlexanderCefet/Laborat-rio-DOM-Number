const btn1 = document.querySelector("#executa1")
const btn2 = document.querySelector("#executa2")
const btn3 = document.querySelector("#executa3")
const btn4 = document.querySelector("#executa4")
const btn5 = document.querySelector("#executa5")
const btn6 = document.querySelector("#executa6")
const btn7 = document.querySelector("#executa7")
function soma(num1,num2){
    return (num1*1)+(num2*1)// para converter para Number
}
function ehprimo(num1){
    if(num1<=1)
    {
        return "sim"
    }
    for(let i =2;i<Math.sqrt(num1);i++)
    {
        if(num1 % i == 0)
        {
            return "sim"
        }
    }
    return "não"
}
btn1.onclick = function() {
    //resposta do exercicio 1
    
    let num1 = document.querySelector("#num1_1").value //recupera a propriedade value do input#num1_1
    let num2 = document.querySelector("#num2_1").value // o mesmo

    document.querySelector(".result1").innerHTML = soma(num1,num2) 
}

btn2.onclick = function() {
    // 1. Recuperar os valores digitados
    let num1 = document.querySelector("#num1_2").value *1 // pegando o value e convertendo pra Number
    let num2 = document.querySelector("#num2_2").value *1
    // 2. Fazer o teste de Valores
    let maior =   Math.max(num1,num2)
    // 3. Imprimir a resposta
    document.querySelector(".result2").innerHTML = maior
}

btn3.onclick = function() {
    // 1. Recuperar os valore digitado
    let num1 = document.querySelector("#num1_3").value*1
    // 2. Imprimir a resposta
    document.querySelector(".result3").innerHTML = ehprimo(num1)
}
btn4.onclick = function() {
    // 1. Recuperar os valores digitados
    let num1 = document.querySelector("#num1_4").value * document.querySelector("#num1_4").value // pegando o valor e elevando por 2
    let num2 = document.querySelector("#num2_4").value * document.querySelector("#num2_4").value
    let num3 = soma(num1,num2)
    // 2. imprimir a resposta
    document.querySelector(".result4").innerHTML = Math.sqrt(num3)
}
btn5.onclick = function() {
    // 1. Recuperar os valores digitados
    let num1 = document.querySelector("#num1_5").value * 1 // pegando o valor e elevando por 2
    let num2 = document.querySelector("#num1_5").value * (document.querySelector("#num2_5").value /100) //pegando o aumento
    document.querySelector(".result5").innerHTML = soma(num1,num2)
}
btn6.onclick = function() {
    // 1. Recuperar os valores digitados
    let num1 = document.querySelector("#num1_6").value / 5 //pegando o valor e convertendo para number
     // 2. imprimir a resposta
    document.querySelector(".result6").innerHTML = soma(num1*9,32)
}
btn7.onclick = function() {
    // 1. Recuperar os valores digitados
    let num1 = document.querySelector("#num1_7").value *2
    let num2 = document.querySelector("#num2_7").value *3
    let num3 = document.querySelector("#num3_7").value *5
     // 2. imprimir a resposta
     document.querySelector(".result7").innerHTML = soma(soma(num1,num2),num3)/10
}
