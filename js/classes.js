class Ator{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Diretor{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero= genero
        this.duracao= duracao
        this.sinopse= sinopse
        this.cartaz = cartaz
        this.direcao = direcao
        this.elenco = elenco
        this.classificacao = classificacao
        this.avaliacao = avaliacao
        this.btnDetalhes = null;
        this.favorito = false;

    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card mb-3 w-25");
        
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let hCardTitle = document.createElement("h6");
        hCardTitle.setAttribute("class", "card-title");

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
        
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1");

        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1");

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));

        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        card.appendChild(hCardTitle);
        card.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());


        return card;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }
    setBtnFavotito = () =>{
        this.btnFav = document.createElement('button');
        this.btnFav.appendChild(document.createTextNode("Favorito"));
        this.btnFav.setAttribute("onclick", "");
    }

    getBtnFavorito = () =>{
        return this.btnFav;
    }

    getDetalhes =  () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card mb-3");
        card.setAttribute("style","max-width: 800px;")

        let cardContent = document.createElement("div");
        cardContent.setAttribute("class", "row g-0");

        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");

        let cardBody = document.createElement("div");

        let titulo = document.createElement("h5");
        titulo.setAttribute("class", "card-title");

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "col-md-4");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "img-fluid");
        imgCartaz.setAttribute("src",this.cartaz);

        let sinopse = document.createElement("div");
        sinopse.setAttribute("style","flex-grow:1;");
        sinopse.setAttribute("style","padding:10px 0 15px 0;");

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");

        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("style", "flex-grow:1;");

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");

        let divAvaliacao = document.createElement("div");
        divAvaliacao.setAttribute("style", "flex-grow:1;");

        let divGeneros = document.createElement("div");
        let divDirecao = document.createElement("div");
        let divElenco = document.createElement("div");

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "col-md-8");

        cardBody.setAttribute("class", "card-body");

        titulo.appendChild(document.createTextNode(this.titulo));
        sinopse.appendChild(document.createTextNode(this.sinopse));
        divDuracao.appendChild(document.createTextNode("Duration: "+this.duracao));
        divClassificacao.appendChild(document.createTextNode("Rated: "+this.classificacao));
        divAvaliacao.appendChild(document.createTextNode("Rating: "+this.avaliacao));
        divGeneros.appendChild(document.createTextNode("Genres: "+this.genero));
        divDirecao.appendChild(document.createTextNode("Director: "+this.direcao));
        divElenco.appendChild(document.createTextNode("Cast: "+this.elenco));

        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divClassificacao);
        divDetalhes.appendChild(divAvaliacao);

        cardHeader.appendChild(titulo);

        imgDiv.appendChild(imgCartaz);
        
        cardBody.appendChild(cardHeader);
        cardBody.appendChild(sinopse);
        cardBody.appendChild(divDetalhes);
        cardBody.appendChild(divGeneros);
        cardBody.appendChild(divDirecao);
        cardBody.appendChild(divElenco);

        cardDiv.appendChild(cardBody);
        cardContent.appendChild(imgDiv);
        cardContent.appendChild(cardDiv);

        card.appendChild(cardContent);


        let btnSalvar = document.createElement("button");
        btnSalvar.appendChild(document.createTextNode("Salvar"));
        btnSalvar.setAttribute("id", 'btnSalvar');
        cardBody.appendChild(btnSalvar);

        let btnFechar = document.createElement('button');
        btnFechar.appendChild(document.createTextNode('Fechar'));
        btnFechar.setAttribute( 'id', 'btnFechar');
        cardBody.appendChild(btnFechar);

        return card;

    }
    
    
}