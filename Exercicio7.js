function Picole() {
let sabor = [["chocolate", 1.50],["Morango", 2.50],["Creme", 2.50],["Manga", 3.20],["Melancia", 3.40],["VanilaIce", 3.00],["Ceu_Azul", 4.00],["Hawaiano", 5.00]];
    let escolha = 0


    escolha = parseInt(prompt("Escolha o sabor, 1 para chocolate, 2 Morango, 3 Creme, 4 Manga, 5 Malancia, 6 Vanila, 7 Céu azul, 8 Brownie, 9 Hawaiano"));
    alert("seu picolé vai sair por R$" + sabor[[escolha - 1][1]]);
}