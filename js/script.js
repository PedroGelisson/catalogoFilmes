/*let ator = new Ator(1,"JOHN WAYNE");
console.log(ator);

let diretor = new Diretor(1,"Alfred Hitchcock");
console.log(diretor);

let direcao = [
    new Diretor(1,"Lana Wachowski"),
    new Diretor(2,"Lilly Wachowski")
];

let elenco=[
    new Ator(1,"Keanu Reeves"),
    new Ator(2,"Carrie-Anne Moss"),
    new Ator(3,"Laurence Fishburne"),
    new Ator(4,"Joe Pantoliano"),
    new Ator(5,"Hugo Weaving"),
    new Ator(6,"Antony Ray Parker")
];
let genero= "Ação";

let sinopse = "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.";

let cartaz = "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg";

let filme = new Filme(
    1,
    "Matrix",
    1999,
    genero,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
);
console.log(filme);*/

let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            console.log(resp);
        })
    }
    return false;
}

getCard = () => {
    let card= document.createElement("div").setAttribute("class","card");
    let imgCartaz = document.createElement("img").setAttribute("src",this.cartaz);
    imgCartaz.setAttribute("class","card-img-top");
    let cardBody = document.createElement("dis").setAttribute("class","card-body");
    let hCardTitle= document.createElement("h5").setAttribute("class","card-title");
}