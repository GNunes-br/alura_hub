import api from '../api';

export async function buscarPorUsuario(idUsuario){
    try {
        const resposta = await api.get(`/repos?postId=${idUsuario}`);
        return resposta.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function buscarPorNome(nome){
    try {
        const resposta = await api.get(`/repos?name=${nome}`);
        return resposta.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function salvar(postId, nome, data){
    try {
        const resposta = await api.post(`/repos`, {
            postId, name: nome, data
        });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

export async function atualizar(postId, nome, data, id){
    try {
        const resposta = await api.put(`/repos/${id}`, {
            postId, name: nome, data
        });
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}

export async function deletar(id){
    try {
        const resposta = await api.delete(`/repos/${id}`);
        return 'sucesso';
    } catch (error) {
        console.log(error);
        return 'erro';
    }
}