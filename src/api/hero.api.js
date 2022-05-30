import { httpClient } from '.';

const path = '/heroes';

export const getHeroesAsync = async (filter = { _page: 1, _limit: 10 }) => {
    const response = await httpClient.get(`${path}`, { params: filter });

    return response.data;
};

export const createHeroAsync = async (payload) => {
    const response = await httpClient.post(`${path}`, payload);

    return response.data;
};
