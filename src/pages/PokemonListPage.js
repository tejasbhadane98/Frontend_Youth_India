import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPokemonList } from '../api/pokemonApi';

const PokemonListPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchPokemonList(30, 0); 
                setPokemonList(response.results);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <input type="text" placeholder="Search Pokemon" onChange={handleSearch} />
            <ul>
                {filteredPokemonList.map((pokemon) => (
                    // console.log(pokemon),
                    <li key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonListPage;
