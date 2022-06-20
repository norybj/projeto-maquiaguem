import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function login(email, senha) {
    const response = await api.post('/usuario/login', {
        email: email,
        senha: senha
    });
    
    return response.data;
}

export async function getUser(id) {
    const response = await api.get(`/usuario/${id}`);
    return response.data;
}

export async function getUserByEmail(email) {
    const response = await api.get(`/usuario/email/${email}`);
    return response.data;
}

export async function createUser(email, senha, nome, nascimento) {
    const response = await api.post(`/usuario`, {
        email,
	    senha,
	    nome,
	    nascimento
    });
    return response.data;
}

export async function updateUser(id, email, senha, nome, nascimento) {
    const response = await api.put(`/usuario/${id}`, {
        email,
	    senha,
	    nome,
	    nascimento
    });
    return response.data;
}