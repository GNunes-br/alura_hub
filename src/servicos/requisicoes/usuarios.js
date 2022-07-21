import api from '../api'

export async function buscar(usuario) {
    try {
        const resposta = await api.get(`/users?login=${usuario}`);
        return resposta.data[0];
    } catch (error) {
        console.log(error);
        return {}
    }
}