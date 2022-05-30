import { httpClient } from '.';

const path = '/heroes';

export const getHeroes = async () => {
    const response = await httpClient.get(`${path}`);

    return response.data;
};
