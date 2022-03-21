import { Controller } from "./controller.js"

const seletor = document.getElementById('tabelaOption')





const Tabela = class Tabela {

    static requisicao() {

        fetch('https://kenzie-olympics.herokuapp.com/paises')
            .then(response => response.json())
            .then((data) => {

                console.log(data)


                Controller.arrayOrdenado(data)

            })

    }

    static novaRequisicao(evento) {
        console.log(evento.target)
        fetch('https://kenzie-olympics.herokuapp.com/paises')
            .then(response => response.json())
            .then((data) => {

                console.log(data)

                Controller.arrayReduzido(data)


            })
    }

    static requisicaoSelector(evento) {
       
        console.log(evento.target.value)
        const medalha = evento.target.value
        
        fetch('https://kenzie-olympics.herokuapp.com/paises')
            .then(response => response.json())
            .then((data) => {

                console.log(data)

                if (medalha == 'ouro') {
                    Controller.tabelaOuro(data)
                } else if (medalha == 'prata') {
                    Controller.tabelaPrata(data)
                } else if (medalha == 'bronze') {
                    Controller.tabelaBronze(data)
                } else if (medalha == 'total') {
                    Controller.arrayOrdenado(data)
                } else {
                    Controller.arrayOrdenado(data)
                }


            })

    }

    // <option value="ouro">Ouro</option>
    //   <option value="prata">Prata</option>
    //   <option value="Instrutor">Bronze</option>

    static criandoElementos(data) {
        const tabela = document.querySelector('.tabela')
        tabela.innerHTML = `
        <tr class="tabelaTopo">
        <td><select class="tdSelect" id="selectPosition">
        <option class="posicao" value="posicao">Posição</option>
      
        </select></td>
        <td id="tdPais">País</td>
        <td><select class="tdSelect" id="selectOuro" value="ouro">
            <option class="ouro" value="ouro">Ouro</option>
      
        </select></td>
        <td><select  class="tdSelect" id="selectPrata" value="prata">
            <option class="prata" value="prata">Prata</option>
      
        </select></td>
        <td><select class="tdSelect" id="selectBronze" value="bronze">
            <option class="bronze" value="bronze">Bronze</option>
      
        </select></td>
        <td><select class="tdSelect" id="selectTotal" value="total">
            <option class="total" value="total">Total</option>
      
        </select></td>
    </tr>
        `
        const ouroSlc = document.querySelector("#selectOuro")
      
        const prataSlc = document.querySelector("#selectPrata")
       
        const bronzeSlc = document.querySelector("#selectBronze")
        
        const totalSlc = document.querySelector("#selectTotal")
       
        
        ouroSlc.addEventListener('click', Tabela.requisicaoSelector)
        prataSlc.addEventListener('click', Tabela.requisicaoSelector)
        bronzeSlc.addEventListener('click', Tabela.requisicaoSelector)
        totalSlc.addEventListener('click', Tabela.requisicaoSelector)

        let position = 1

        data.forEach((elemento) => {

            elemento.posicao = 0 + position 
            position = position + 1
            const pais = elemento.country
            const bandeira = elemento.flag_url
            const posicao = elemento.posicao
            const bronze = elemento.medal_bronze
            const ouro = elemento.medal_gold
            const prata = elemento.medal_silver
            const total = elemento.total

            this.inserirNaTabela(posicao, bandeira, pais, ouro, prata, bronze, total)
        })
    }

    static inserirNaTabela(posicao, bandeira, pais, ouro, prata, bronze, total) {
        const tabela = document.querySelector('.tabela')

        console.log(bandeira)

        const tr = document.createElement('tr')
        tr.classList.add('positions')

        const tdPosicao = document.createElement('td')
        const tdPais = document.createElement('td')
        tdPais.classList.add('paises')
        const tdOuro = document.createElement('td')
        tdOuro.classList.add('tdNumber')
        const tdPrata = document.createElement('td')
        tdPrata.classList.add('tdNumber')
        const tdBronze = document.createElement('td')
        tdBronze.classList.add('tdNumber')
        const tdTotal = document.createElement('td')
        tdTotal.classList.add('tdNumber')

        tdPosicao.innerText = `${posicao}`


        tdPais.innerHTML = `<img src="${bandeira}" class="iconBandeira">
        <span class="nomePais">${pais}</san>`
        tdOuro.innerText = `${ouro}`
        tdPrata.innerText = `${prata}`
        tdBronze.innerText = `${bronze}`



        tdTotal.innerText = `${total}`

        tr.appendChild(tdPosicao)
        tr.appendChild(tdPais)
        tr.appendChild(tdOuro)
        tr.appendChild(tdPrata)
        tr.appendChild(tdBronze)
        tr.appendChild(tdTotal)
        tabela.appendChild(tr)





    }

   
}


export { Tabela }

