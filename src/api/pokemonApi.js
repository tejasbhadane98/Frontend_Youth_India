import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit, offset) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon`, {
            params: {
                limit,
                offset,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        throw error;
    }
};

export const fetchPokemonDetails = async (pokemonId) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${pokemonId}`);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        throw error;
    }
};
