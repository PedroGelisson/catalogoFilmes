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

let detalhesFilme = (id) => {
    fetch("https://www.omdbapi.com/?apikey=57fd27e0&plot=full&i="+id)
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
        let mostrarFilme = document.querySelector("#mostrar-filme");
        mostrarFilme.appendChild(filme.getDetalhes());

        document.querySelector("#btnFechar").onclick= ()=>{
            document.querySelector("#lista-filmes").style.display="flex";
            document.querySelector("#mostrar-filme").innerHTML="";
            document.querySelector("#mostrar-filme").style.display="none"        
        }

        filme.getBtnSalvar().onclick=()=>{
            console.log(filme);
            
            let navFavoritos = document.querySelector("#nav-favoritos");
            navFavoritos.onclick=()=>{
                
    
            if(localStorage.getItem("filmesFavortitos") == null)
            {
               
                let listaFavoritos = [];
                listaFavoritos.push(filme);
                localStorage.setItem("filmesFavoritos",JSON.stringify(listaFavoritos));
                console.log(listaFavoritos)
            }else{
                let listaFavoritos = JSON.parse(localStorage.getItem("filmesFavoritos"));
                listaFavoritos.push(filme);
                localStorage.setItem("filmesFavoritos",JSON.stringify(listaFavoritos));

                
                }
    

            }
        }
            
        ocultarFilmes();
    })
}

function ocultarFilmes() {
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.style.display = "none";
}

