function contagemRegressiva(segundos) {
    let contagem = 10

    let sequencia = setInterval(
        function contagem_lançamento() {
            console.log(contagem);

            if (contagem == 5) {
                console.log("алып китү")

            }

            if (contagem < 1) {
                console.log("başlaýar") //está lançando em Turcomeno
                clearInterval(sequencia);
            }

            contagem--;

        }, 1000

    )
}