//Importamos a biblioteca Axios
import axios from 'axios' 
//Criamos uma instância do Axios com a configurção da baseURL
const api = axios.create({baseURL: 'http://127.0.0.1:5000'})
//Definimos uma função assíncrona chamada getProdutos
export async function getProdutos(){
    try {
        //dentro do bloco try, fizemos uma requisição GET para o endpoint '/produto'.
        const response = await api.get('/produto')
        //Se a requisição for bem-sucedida, retornamos dados da resposta.
        return response.data
    } catch (error) {
        // se houver erro, será exibido essa mensagem no console
        console.error(`Erro ao buscar produtos: ${error.message}`)
    }
}