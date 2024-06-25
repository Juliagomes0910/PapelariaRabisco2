import Headerb from '../front-end/components/Headerb'
import Titulo from '../front-end/components/Titulo'
import CardList from '@/front-end/components/CardList'
// Importamos os Hooks do React, useState e useEffect
import { useState, useEffect } from 'react'
//Importamos a função getProdutos de nosso arquivo apiRabisco
import { getProdutos } from '@/services/apiRabisco'

export default function produtos(){

    //Criamos um estado chamado 'produtos' para armazenar uma lista de produtos.
    const [produtos, setProdutos] = useState([])

    //Função assíncrona que busca produtos da API
    async function buscaProdutos() {
        try {
            //Chamamos a função 'getProdutos' para obter os dados dos produtos.
            const data = await getProdutos()
            //exibimos os dados no console para verificar se foram recebidos.
            console.log(data)
            //Atualizamos o estado 'produtos' com os dados recebidos
            setProdutos(data)
        } catch(error) {
            //se houver erro, exibimos no console:
            console.error('Erro ao buscar produtos:', error)
        }
    }

    //O useEffect é usado para realizar efeitos colaterais, como chamadas de API.
    useEffect(() => {
        // Chamamos a função 'buscaProdutos' assim que o componente é montado.
        buscaProdutos()
        //configuramos um intervalo para chamar 'buscaProdutos' a cada  segundos.
        const atualiza = setInterval(buscaProdutos,5000)
        //Retornamos uma função de limpeza que cancela o intervalo quando o componente é desmontado
        return function(){
            clearInterval(atualiza)
        }
    }, []) //O array vazio significa que este efeito só é executado uma vez após a montagem.
        
    //Renderizando os componentes na tela 
    return (
        <>
            <Headerb/>
            <Titulo texto="Conheça nossos produtos!"/>
            <CardList produtos={produtos} />
        </>
        )
    }
