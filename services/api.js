const axios = require('axios');
require('dotenv').config();

const base_url = process.env.API_BASE_URL;

const api = axios.create({
    baseURL: base_url,
});

module.exports = {
    getAll: async (id) => {
        try {
            const {
                data: { data },
            } = await api.get(`animes`);

            return data;
        } catch (error) {
            console.log(error.response.data);
            return error.response.data;
        }
    },
    get: async (id) => {
        try {
            const {
                data: { data },
            } = await api.get(`animes/${id}`);

            return data;
        } catch (error) {
            console.log(error.response.data);
            return error.response.data;
        }
    },
    search: async (search) => {
        try {
            const { data } = await api.get(`animes/search`, {
                params: { search },
            });

            return data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    },
};
