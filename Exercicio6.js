function Vogais() {
    let letras = [];

     letras = [[
        "a"],
        ["e"],
        ["o"], 
        ["i"], 
        ["u"],
    ]

    let escolha = "";

    escolha = prompt("Digite sua letra")

    letras.forEach(vogal => {
        if(escolha == vogal){
            alert("é uma vogal");
        }else{
            alert("é uma consoante");
        }
    });
    // if (letras == ) {
    //     alert("sua letra é uma vogal")
    // } else {
    //     alert("sua letra é uma consoante")
    // }
}