import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonsStats from './PokemonsStats';
import './style.css';
import cx from 'classnames';

const Pokedex = ({ rounded = true }) => {

    const user = useSelector(state => state.user);

    const [ pokemons, setPokemons] = useState([]);
    const [ pokemonSearch , setPokemonSearch ] = useState('');
    const [ pokemonType, setPokemonType ] = useState([]);
/*     const [ isToggled, setIsToggled ] = useState(false); */

/*     const toggler = () => {
        isToggled ? setIsToggled(false): setIsToggled(true);
    } */
    const navigate = useNavigate();

/*     const sliderCX = cx('slider', {
        'rounded': rounded
    }) */

    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then(res => {
                setPokemons(res.data.results)
            });

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokemonType(res.data.results))
    }, [])


    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}`);
    }

    const filterType = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const [ page, setPage ] = useState(1);
    const lastIndex = page * 40;
    const firstIndex = lastIndex - 40;
    const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(pokemons.length / 40);

    const numbers = [];
    for(let i = 1; i <= lastPage; i++){
        numbers.push(i);
    }

    return (
        <div>
            <div className='red-div'>
            <img 
            src={"https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"} 
            alt="" 
            className='pokedex-label'/>
            </div>
            <div className='black-div'></div>
            <div className='eclipse'></div>
            <div className='eclipse2'></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Pokedex</h1>
            <h3><span className='span-color'>Welcome {user}</span> here you can find your pokemon...</h3>
            <div className='toggle-input'>
{/*                 <label className='switch'>
                    <input 
                    type="checkbox" 
                    onClick={toggler}/>
                    <span className={sliderCX}/>
                </label> */}
            </div>
            <br />
            <br />
            <div className='searchnselect'>
            <form onSubmit={search}>
                <input 
                type="text" 
                className='search-input'
                placeholder='Search your pokemon...'
                value={pokemonSearch}
                onChange={e => setPokemonSearch(e.target.value)}/>
                <button class="btn btn-danger">
                    Search
                </button>
            </form>

            <select onChange={filterType}
            className='select'>
                <option value="">Choose a type...</option>
                {
                    pokemonType?.map(type => (
                        <option value={type.url} key={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>
            </div>
            <ul className='pokemons-card'>
                {
                    pokemonsPaginated.map(pokemon=> (
                        <PokemonsStats pokemonUrl={pokemon.url ? pokemon.url: pokemon.pokemon.url} 
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
                    ))
                }
            </ul>
            <button className='np-button'
            onClick={()=> setPage(page-1)}
            disabled={page === 1}>
                <i class="fa-solid fa-backward-step"></i>
            </button>
            {numbers.map( number =>(
                <button className='np-button'
                onClick={() => setPage(number)}>
                    {number}
                </button>
            ))}
            <button className='np-button'
            onClick={()=> setPage(page+1)}
            disabled={page === lastPage}>
                <i class="fa-solid fa-forward-step"></i>
            </button>
        </div>
    );
};

export default Pokedex;