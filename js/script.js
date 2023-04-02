let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");


//funcao para buscar filme
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
//funcao para listar filmes na tela
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
//funcao para aparecer os detalhes do filme
let detalhesFilme = (id) => {
    fetch("https://www.omdbapi.com/?apikey=ed5e5ad5&plot=full&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre,
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            resp.Actors,
            resp.Rated,
            resp.imdbRating
        );
        document.querySelector("#mostrar-filme").appendChild(filme.getDetalhes());

        document.querySelector("#btnFechar").onclick = () => {
            document.querySelector("#lista-filmes").style.display = "flex";
            document.querySelector("#mostrar-filme").innerHTML = "";
            document.querySelector("#mostrar-filme").style.display = "none";

        }

        if(filme.favorito){
            document.querySelector("#btnRemover").onclick = () => {
            removerFavorito(filme.id);
                
        }
    }
    else{
            document.querySelector("#btnSalvar").onclick = () => {
                filme.favorito = true;
                salvarFilme(filme);
            
            }
        }
        document.querySelector("#lista-filmes").style.display = "none";
        document.querySelector("#mostrar-filme").style.display = "flex";
    });
}

//funcao para salvar filme no localStorage
let salvarFilme = (filme) => {
    filme.favorito = true;
    let filmesString = localStorage.getItem('filmesFavoritos');
    if (filmesString == null || filmesString == undefined || filmesString == "") {
        let arrayFilmes = new Array();
        localStorage.setItem('filmesFavoritos', JSON.stringify(arrayFilmes));
        let filmesString = localStorage.getItem('filmesFavoritos');
        var filmes = JSON.parse(filmesString);
        filmes.push(filme);
        filmes = JSON.stringify(filmes);
        localStorage.setItem('filmesFavoritos', filmes);
        
    }
    else {
    if(filme.favorito = true)
        var filmes = JSON.parse(filmesString);
        filmes.push(filme);
        filmes = JSON.stringify(filmes);
        localStorage.setItem('filmesFavoritos', filmes);
    }
}

//funcao para pegar filmes da localStorage e adicionar a lista de favoritos
let navFavoritos = document.querySelector("#nav-favoritos");
navFavoritos.onclick = () => {
    listarFavoritos();
}

let listarFavoritos = () => {
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    filmesFavoritos = JSON.parse(filmesFavoritos);
    let filmes = new Array();
    filmesFavoritos.forEach((item) => {
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
            item.avaliacao,
            
            
        );
        
        if(filme.favorito = true)
        filmes.push(filme);

    });
    listarFilmes(filmes);    
}

//falta funcao pra remover favorito

//falta funcao para adicionar filme no formulario