import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import colorType from '../utils/ColorType';

const PokemonsStats = ({ pokemonUrl }) => {

    const [ pokemons, setPokemons ] = useState({}); 
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(pokemonUrl)
            .then(res => setPokemons(res.data))
    }, [])

    return (
        <div 
        onClick={()=> navigate(`/pokedex/${pokemons.id}`)}
        className='pokemon-container'
        style={{background: colorType(pokemons.types?.[0]?.type.name)}}>
            <div>
            <p className='pokemon-name' style={{color: "white"}}><b>{pokemons.name}</b></p>
            <div className='pokemon-type' style={{color: "white"}}>type :{pokemons.types?.[0]?.type.name}, <br />{pokemons.types?.[1]?.type.name}</div>
            <div className='pokemon-type' style={{color: "white"}}>Hp: {pokemons.stats?.[0].base_stat}</div>
            <div className='pokemon-type' style={{color: "white"}}>Attack: {pokemons.stats?.[1].base_stat}</div>
            <div className='pokemon-type' style={{color: "white"}}>Defense: {pokemons.stats?.[2].base_stat}</div>
            <div className='pokemon-type' style={{color: "white"}}>Speed: {pokemons.stats?.[5].base_stat}</div>
            </div>
            <div>
            <img src={pokemons.sprites?.other.dream_world.front_default} className='pokemon-img' alt="" />
            </div>
        </div>
    );
};

export default PokemonsStats;