import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function listar() {
    const response = await api.get('/agenda');
    return response.data;
}

export async function deletar(id) {
    const response = await api.delete(`/agenda/${id}`);
    return response.data;
}

export async function getById(id){
    const response = await api.get(`/agenda/${id}`);
    return response.data;
}

export async function udpateSchedule(id, usuarioId, maquiagemId, data, hora){

    const response = await api.put(`/agenda/${id}`, {
        usuario: usuarioId,
        maquiagem: maquiagemId,
        data,
        hora
    });
    return response.data;
}

export async function createSchedule(usuarioId, maquiagemId, data, hora){

    const response = await api.post(`/agenda`, {
        usuario: usuarioId,
        maquiagem: maquiagemId,
        data,
        hora
    });
    return response.data;
}
