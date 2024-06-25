import Titulo from '@/front-end/components/Titulo'
import Headerb from '../front-end/components/Headerb'
import CardListFunc from '@/front-end/components/CardListFunc'
import { useEffect, useState } from 'react'
import { getFuncionarios } from '@/services/apiReqRes'

export default function contato() {
  const [funcionarios, setFuncionarios] = useState([])

  async function buscaFuncionarios(){
    try {
      const data = await getFuncionarios()
      setFuncionarios(data)
      console.log(funcionarios)
    }catch(error){
      console.error('Erro ao buscar funcionários: ',error)
    }
  }

  useEffect(()=> {
    buscaFuncionarios()
  },[])

  return (
    <>
    <Headerb/>
    <Titulo texto="Conheça a nossa equipe de vendedores."/>
    <CardListFunc funcionarios={funcionarios}/>
    </>
  )
}