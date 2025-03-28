function somaNumeros() {
    let soma = 0;
    let continuar = true;
    
    while (continuar) {
        let numero = 0;
        numero= parseFloat( prompt("digite um numero, ou informe 0 para sair da função"));

        if (isNaN(numero)) {
            alert("Por favor, digite um número válido, obrigado");
        } else {
            soma += numero;
        }
        if (numero == 0) {
            continuar = false;
        }
    }

    alert("A soma dos números é:" + soma);
}