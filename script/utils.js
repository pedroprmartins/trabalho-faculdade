function calculate() {
    // Pega os valores dos campos de entrada e a operação selecionada
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;

    // Verifica se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, insira números válidos.");
        return;
    }

    // Executa a operação selecionada
    var result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Não é possível dividir por zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Operação inválida.");
            return;
    }

    // Exibe o resultado no console
    console.log("Resultado:", result);

    //Exibe o resultado no alert da página
    alert("Resultado: " + result);
}