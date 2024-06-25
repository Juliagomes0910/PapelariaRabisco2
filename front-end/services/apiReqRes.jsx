import axios from 'axios' 
const api = axios.create({baseURL: 'https://reqres.in/api/'})
export async function getFuncionarios(){
    try {
        //dentro do bloco try, fizemos uma requisição GET para o endpoint '/users'. Utilizando um parâmetro per_page=12 para buscas 12 funcionários  
        const response = await api.get('users?per_page=12')
        //Se a requisição for bem-sucedida, retornamos dados da resposta.
        return response.data.data
    } catch (error) {
        // se houver erro, será exibido essa mensagem no console
        console.error(`Erro ao buscar produtos: ${error.message}`)
    }
}