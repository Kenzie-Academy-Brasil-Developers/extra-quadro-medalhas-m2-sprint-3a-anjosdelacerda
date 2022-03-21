
import {Tabela} from "./models.js"
// import {Controller} from "./controller.js"


Tabela.requisicao()

const botaoPesquisa = document.getElementById('botaoPesquisa')
botaoPesquisa.addEventListener('click', Tabela.novaRequisicao )


//DUVIDAS
//Como pego o value do meu input se o meu input ainda não existe quando a função vai ser executada
//

const ouroSlc = document.querySelector("#selectOuro")
console.log(ouroSlc)
const prataSlc = document.querySelector("#selectPrata")
console.log(prataSlc)
const bronzeSlc = document.querySelector("#selectBronze")
console.log(bronzeSlc)
const totalSlc = document.querySelector("#selectTotal")
console.log(totalSlc)

ouroSlc.addEventListener('click', Tabela.requisicaoSelector)
prataSlc.addEventListener('click', Tabela.requisicaoSelector)
bronzeSlc.addEventListener('click', Tabela.requisicaoSelector)
totalSlc.addEventListener('click', Tabela.requisicaoSelector)


