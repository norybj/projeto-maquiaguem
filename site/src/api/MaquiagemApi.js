import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function getMakeUp(id) {
    const response = await api.get(`/maquiagem/${id}`);
    return response.data;
}

export async function getMakeUpByName(name) {
    const response = await api.get(`/maquiagem/nome/${name}`);
    return response.data;
}

export async function createMakeUp(maquiagem, valor) {
    const response = await api.post(`/maquiagem`, {
        maquiagem,
        valor
    });
    return response.data;
}

export async function updateMakeUp(id, maquiagem, valor) {
    const response = await api.put(`/maquiagem/${id}`, {
        maquiagem,
        valor
    });
    return response.data;
}