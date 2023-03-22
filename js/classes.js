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
        this.btnSalvar = null;

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

    getCardDetalhesFilme =  () => {
        let CardDetalhesFilme = document.createElement("div");
        CardDetalhesFilme.setAttribute("class", "card mb-3 ");
        CardDetalhesFilme.setAttribute("style","max-width:540px")
        
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class","row g-0");

        let divColunaImg = document.createElement("div");
        divColunaImg.setAttribute("class", "col-md-4");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "img-fluid rounded-start");
        imgCartaz.setAttribute("src", this.cartaz);

        divColunaImg.appendChild(imgCartaz);

        let divColunaText = document.createElement("div");
        divColunaText.setAttribute("class","col-md-8");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");

        let divSinopse = document.createElement("div");
        divSinopse.setAttribute("style", "display:grid");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divSinopse.appendChild(document.createTextNode(this.ano));
        divSinopse.appendChild(document.createTextNode(this.genero));
        divSinopse.appendChild(document.createTextNode(this.duracao));
        divSinopse.appendChild(document.createTextNode(this.sinopse));
        divSinopse.appendChild(document.createTextNode(this.direcao));
        divSinopse.appendChild(document.createTextNode(this.elenco));
        divSinopse.appendChild(document.createTextNode(this.classificacao));
        divSinopse.appendChild(document.createTextNode(this.avaliacao));
        
        
        CardDetalhesFilme.appendChild(divColunaImg);
        CardDetalhesFilme.appendChild(divColunaText)
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divSinopse);
        divColunaText.appendChild(cardBody);
        
        let btnSalvar = document.createElement("button");
        btnSalvar.setAttribute("onclick",`salvar(${this})`);
        btnSalvar.appendChild(document.createTextNode("Salvar"));
        cardBody.appendChild(btnSalvar);

        return CardDetalhesFilme;

    }
    
    
}