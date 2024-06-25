import Titulo from '@/front-end/components/Titulo'
import Headerb from '../front-end/components/Headerb'
import Carrossel from '../front-end/components/Carrossel'

export default function Home() {
  return (
    <>
      <Headerb />
      <Titulo texto="Bem vindo à papelaria Rabisco!"/>
      <Carrossel />
    </>
  )
}