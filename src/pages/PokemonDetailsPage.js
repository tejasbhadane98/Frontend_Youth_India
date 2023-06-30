import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../api/pokemonApi';

const PokemonDetailsPage = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchPokemonDetails(id);
                setPokemonDetails(response);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pokemonDetails) {
        return <div>Pokemon not found.</div>;
    }

    return (
        <div>
            <h2>Name: {pokemonDetails.name}</h2>
            {/* {console.log(pokemonDetails)} */}
            <h3>Height: {pokemonDetails.height}</h3>
            <h3>Base Experience: {pokemonDetails.base_experience}</h3>
            <h2>Abilities:</h2>
            <ul>
                {pokemonDetails.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
            <h2>Moves:</h2>
            <ul>
                {pokemonDetails.moves.map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                ))}
            </ul>
            <h2>Types:</h2>
            <ul>
                {pokemonDetails.types.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDetailsPage;
