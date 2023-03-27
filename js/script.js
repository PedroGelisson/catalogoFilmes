let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");



btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=ed5e5ad5&&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach((item) => {
               //console.log(item);
                let filme = new Filme(
                    item.imdbID, 
                    item.Title, 
                    item.Year,
                    null, 
                    null, 
                    null, 
                    item.Poster, 
                    null, 
                    null, 
                    null, 
                    null, 
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    //console.log(listaFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            //console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}

    
    let detalhesFilme = async (id) => {

        fetch("https://www.omdbapi.com/?apikey=ed5e5ad5&&i="+id)
        .then((resp) => resp.json())
        .then((resp) => {

            
            let filme = new Filme(
                resp.imdbID, 
                resp.Title, 
                resp.Year, 
                resp.Genre.split(","), 
                resp.Runtime, 
                resp.Plot,
                resp.Poster, 
                resp.Director, 
                resp.Actors.split(","), 
                resp.Awards, 
                resp.imdbRatings, 
            )
            //console.log(filme.getDetalhes());
            document.querySelector("#mostrar-filme").appendChild(filme.getDetalhes());

            document.querySelector("#btnFechar").onclick = ()=> {
                document.querySelector("#lista-filmes").style.display="flex";
                document.querySelector("#mostrar-filme").innerHTML="";
                document.querySelector("#mostrar-filme").style.display="none";
            }
            document.querySelector("#btnSalvar").onclick = ()=> {
                salvarFilme(filme);
            }
            document.querySelector("#lista-filmes").style.display="none";
            document.querySelector("#mostrar-filme").style.display="flex";

        });
    }
let filmeString = localStorage.getItem('filmesFavoritos');

let  filmes = JSON.parse(filmeString);
filmes.push(filme);

filmes= JSON.stringify(filmes);

localStorage.setItem('filmesFavoritos',filmes);

let navFavoritos = document.querySelector("#nav-favoritos");
navFavoritos.onclick = ()=>{
    listarFavoritos();
}
let filmesFavoritos = localStorage.getItem('filmesFavoritos');
filmesFavoritos=JSON.parse(filmesFavoritos);

let filmes1 = new Array;
filmesFavoritos.forEach((item)=>{
    let filme = new Filme(
    item.id,
    item.titulo,
    item.ano,
    item.genero,
    item.duracao,
    item.sinopse,
    item.cartaz,
    item.direcao,
    item.elenco,
    item.classificacao,
    item.avaliacao
    );
    filmes1.push(filme);
});
listarFilmes(filmes1);