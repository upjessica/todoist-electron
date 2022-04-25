const adicionarItemPelaTecla = (event) => {
  //Pegando o tipo da tecla pelo evento
  const tecla = event.key;

  //Verificando se a tecla pressionada é o Enter
if(tecla === "Enter") {
  //Chamando a função responsável por adicionar item
 adicionarItem()

//encerra o IF, porém não está sendo utilizado aqui, pois não temos nada abaixo do IF, apenas por demonstração
  return;
  }
}

adicionarItem = ()=> {
const valorInput = document.getElementById("oi").value

//Pegado a tag UL do nosso HTML pelo ID
const minhaTagUl = document.getElementById("lista-de-tarefas")

//Criando a tag LI com JavaScript
const criarTagLI = document.createElement("li")

//Adicionando um texto para nossa tag li criada
criarTagLI.innerText = valorInput

minhaTagUl.appendChild(criarTagLI)

}
