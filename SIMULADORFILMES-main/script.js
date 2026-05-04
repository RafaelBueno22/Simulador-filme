//Função que será chamada quando clicar no botão
//Função: um bloco de código reutilizável que executa uma tarefa especifica
function calcular(){
    //1. pegar os elementos da tela
    // Aqui pegamos cada checkbox pelo Id
    let sunshine = document.getElementById("Sunshine")
    let hereditario = document.getElementById("Hereditário")
    let seven = document.getElementById("Seven")
    let duna = document.getElementById("Duna")
    let sociedade = document.getElementById("Sociedade")
    let interestelar = document.getElementById("Interstelar")
    //2 variaveis iniciais
    //total começa com 0
    let total = 0
    //string para guardar os itens escolhidos
    let itens = ""
    //3. verificar cada produto

    // se o checkbox estiver marcado (true)

    if(sunshine.checked){
        total = total + 35.00 //soma o valor do hamburguer
        itens = itens +"Sunshine <br>" //adiciona ao texto dos produtos

    }
    if(hereditario.checked){
        total = total + 30.00
        itens = itens + "Hereditário <br>"

    }
    if(seven.checked){
        total = total + 30.00
        itens = itens + "Seven <br>"
    }
    if(duna.checked){
        total = total + 40.00
        itens = itens + "Duna 2 <br>"
    }
    if(sociedade.checked){
        total = total + 30.00
        itens = itens + "Sociedade <br>"

    }
    if(interestelar.checked){
        total = total + 35.00
        itens = itens + "Interstelar<br>"
    }

    //4. pegar div do resultado
    let resultado = document.getElementById("resultado")

    //5.validacao
    //se nao escolheu nada
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui 
    }

    //6. desconto
    let subtotal = total
    let desconto = 0

    //se o valor for maior ou igual a 40, aplicamos o desconto de 10%
    if(subtotal >= 40){
        desconto = subtotal * 0.15 // 10%
    }
    
    /*//7. entrega
    let entrega = 5
    //se passar de 50 -> entrega gratis
   if(subtotal - desconto >= 55){
    entrega = 0
    
    }*/

    // 8. total final
    let totalFinal = subtotal - desconto 

    //9. mostrar o resultado
    resultado.innerHTML = "<strong>Itens:</strong><br>" + itens 
    + "<br> Subtotal: R$ " + subtotal.toFixed(2) + "<br> Desconto: R$ " + desconto.toFixed(2) + "<br><strong> Total: R$ " 
    + totalFinal.toFixed(2) + "</strong>"

    

}