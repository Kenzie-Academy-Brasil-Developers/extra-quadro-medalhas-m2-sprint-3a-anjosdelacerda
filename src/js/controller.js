import {Tabela} from './models.js'

const Controller = class Controller{

    static arrayOrdenado(data){

        const dataOrdenado = []

        data.forEach((elemento) =>{
            elemento.total = elemento.medal_bronze + elemento.medal_gold + elemento.medal_silver 
          
            dataOrdenado.push(elemento)
        })

        console.log(dataOrdenado)
        this.ordenando(dataOrdenado)
    }

    static tabelaOuro(data){

        const dataOrdenado = []

        data.forEach((elemento) =>{
            elemento.total = elemento.medal_bronze + elemento.medal_gold + elemento.medal_silver 
          
            dataOrdenado.push(elemento)
        })

        console.log(dataOrdenado)
        this.ordenandoOuro(dataOrdenado)
    }

    static tabelaPrata(data){

        const dataOrdenado = []

        data.forEach((elemento) =>{
            elemento.total = elemento.medal_bronze + elemento.medal_gold + elemento.medal_silver 
          
            dataOrdenado.push(elemento)
        })

        console.log(dataOrdenado)
        this.ordenandoPrata(dataOrdenado)
    }


    static tabelaBronze(data){

        const dataOrdenado = []

        data.forEach((elemento) =>{
            elemento.total = elemento.medal_bronze + elemento.medal_gold + elemento.medal_silver 
          
            dataOrdenado.push(elemento)
        })

        console.log(dataOrdenado)
        this.ordenandoBronze(dataOrdenado)
    }



    static ordenando(data){

        const newData = data.sort((a,b)=>{
            return b.total - a.total
        })
        
        Tabela.criandoElementos(newData)
    }

    static ordenandoOuro(data){

        const newData = data.sort((a,b)=>{
            return b.medal_gold - a.medal_gold
        })
        console.log(newData)
        Tabela.criandoElementos(newData)
    }

    static ordenandoPrata(data){

        const newData = data.sort((a,b)=>{
            return b.medal_silver - a.medal_silver
        })
        console.log(newData)
        Tabela.criandoElementos(newData)
    }


    static ordenandoBronze(data){

        const newData = data.sort((a,b)=>{
            return b.medal_bronze - a.medal_bronze
        })
        console.log(newData)
        Tabela.criandoElementos(newData)
    }

    static arrayReduzido(data){
        const input = document.querySelector('.inputPesquisa')
        const pais = input.value
        console.log(pais)

        
        const paisProcurado = data.filter((elemento) => {
            return elemento.country.toLowerCase() == pais.toLowerCase()} )

           
       
        this.novoArrayOrdenado(paisProcurado)


    }

    static novoArrayOrdenado(data){

        const dataUnico = []

        data.forEach((elemento) =>{
            elemento.total = elemento.medal_bronze + elemento.medal_gold + elemento.medal_silver 
          
            dataUnico.push(elemento)
        })

        console.log(dataUnico)
        Tabela.criandoElementos(dataUnico)
    }



}

export {Controller} 