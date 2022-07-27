import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonDetail = () => {

    const [ pokemon, setPokemon ] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [ id ])

    console.log(pokemon)
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
            <br />
            <br />
            <button onClick={()=> navigate("/pokedex/")} className='button-back-detail'><i class="fa-solid fa-circle-arrow-left"></i></button>
            <br />
            <div className='total-div'>
            <div className='first-div'>
            <img 
            src={pokemon.sprites?.other.dream_world.front_default} 
            alt="" className='img-detail'/>
            <div className='w-h-div'>
                <div className='weight-div'>
                <div className='numbers-div1'><b>{pokemon.weight}</b></div>
                <div>Weight</div>
                </div>
                <div className='height-div'>
                <div className='numbers-div1'><b>{pokemon.height}</b></div>
                <div>Height</div>
                </div>
                </div>
                <div className='vector1'></div>
                <div className='vector2'></div>
                <h2 className='h2-div1'>{pokemon.name}</h2>
                <div className='id-div'># {pokemon.id}</div>
            </div>
            <div className='type-div'>
                <h2>Type</h2>
                <div className='vector3'></div>
                <div className='vector4'></div>
                <div className='queris-type'>
                    <div className='type1'>
                        {pokemon.types?.[0].type.name}
                    </div>
                    <div className='type2'>
                        {pokemon.types?.[1].type.name}
                    </div>
                </div>
            </div>
            <div className='ability-div'>
                <h2>Abilities</h2>
                <div className='vector5'></div>
                <div className='vector6'></div>
                <div className='queries-ability'>
                    <div className='ability1'>{pokemon.abilities?.[0].ability.name}</div>
                    <div className='ability2'>{pokemon.abilities?.[1].ability.name}</div>
                </div>
            </div>
            <div className='stats-div'>
                <h2>Stats Base</h2>
                <div className='vector7'></div>
                <div className='vector8'></div>
                <div className='first-stats'>
                <div>Hp: {pokemon.stats?.[0].base_stat}</div>
                <div>Attack: {pokemon.stats?.[1].base_stat}</div>
                </div>
                <br />
                <div className='first-stats'>
                <div>Defense: {pokemon.stats?.[2].base_stat}</div>
                <div>Speed: {pokemon.stats?.[5].base_stat}</div>
                </div>
            </div>
{/*             <div className='button-encounters'>
                <button className='button-detail'>Encounters</button>
            </div> */}
            <div className='movements-div'>
                <h2>Movements</h2>
                <div>{pokemon.moves?.[0].move.name}</div>
                <div>{pokemon.moves?.[1].move.name}</div>
                <div>{pokemon.moves?.[2].move.name}</div>
                <div>{pokemon.moves?.[3].move.name}</div>
                <div>{pokemon.moves?.[4].move.name}</div>
                <div>{pokemon.moves?.[5].move.name}</div>
                <div>{pokemon.moves?.[6].move.name}</div>
                <div>{pokemon.moves?.[7].move.name}</div>
                <div>{pokemon.moves?.[8].move.name}</div>
                <div>{pokemon.moves?.[9].move.name}</div>
                <div>{pokemon.moves?.[10].move.name}</div>
                <div>{pokemon.moves?.[11].move.name}</div>
                <div>{pokemon.moves?.[12].move.name}</div>
                <div>{pokemon.moves?.[13].move.name}</div>
                <div>{pokemon.moves?.[14].move.name}</div>
                <div>{pokemon.moves?.[15].move.name}</div>
                <div>{pokemon.moves?.[16].move.name}</div>
                <div>{pokemon.moves?.[17].move.name}</div>
                <div>{pokemon.moves?.[18].move.name}</div>
                <div>{pokemon.moves?.[19].move.name}</div>
                <div>{pokemon.moves?.[20].move.name}</div>
                <div>{pokemon.moves?.[21].move.name}</div>
                <div>{pokemon.moves?.[22].move.name}</div>
                <div>{pokemon.moves?.[23].move.name}</div>
                <div>{pokemon.moves?.[24].move.name}</div>
                <div>{pokemon.moves?.[25].move.name}</div>
                <div>{pokemon.moves?.[26].move.name}</div>
                <div>{pokemon.moves?.[27].move.name}</div>
                <div>{pokemon.moves?.[28].move.name}</div>
                <div>{pokemon.moves?.[29].move.name}</div>
                <div>{pokemon.moves?.[30].move.name}</div>
                <div>{pokemon.moves?.[31].move.name}</div>
                <div>{pokemon.moves?.[32].move.name}</div>
                <div>{pokemon.moves?.[33].move.name}</div>
                <div>{pokemon.moves?.[34].move.name}</div>
                <div>{pokemon.moves?.[35].move.name}</div>
                <div>{pokemon.moves?.[36].move.name}</div>
                <div>{pokemon.moves?.[37].move.name}</div>
                <div>{pokemon.moves?.[38].move.name}</div>
                <div>{pokemon.moves?.[39].move.name}</div>
                <div>{pokemon.moves?.[40].move.name}</div>
                <div>{pokemon.moves?.[41].move.name}</div>
                <div>{pokemon.moves?.[42].move.name}</div>
                <div>{pokemon.moves?.[43].move.name}</div>
                <div>{pokemon.moves?.[44].move.name}</div>
                <div>{pokemon.moves?.[45].move.name}</div>
                <div>{pokemon.moves?.[46].move.name}</div>
                <div>{pokemon.moves?.[47].move.name}</div>
                <div>{pokemon.moves?.[48].move.name}</div>
                <div>{pokemon.moves?.[49].move.name}</div>
                <div>{pokemon.moves?.[50].move.name}</div>
                <div>{pokemon.moves?.[51].move.name}</div>
                <div>{pokemon.moves?.[52].move.name}</div>
                <div>{pokemon.moves?.[53].move.name}</div>
                <div>{pokemon.moves?.[54].move.name}</div>
                <div>{pokemon.moves?.[55].move.name}</div>
                <div>{pokemon.moves?.[56].move.name}</div>
                <div>{pokemon.moves?.[57].move.name}</div>
                <div>{pokemon.moves?.[58].move.name}</div>
                <div>{pokemon.moves?.[59].move.name}</div>
                <div>{pokemon.moves?.[60].move.name}</div>
                <div>{pokemon.moves?.[61].move.name}</div>
                <div>{pokemon.moves?.[62].move.name}</div>
                <div>{pokemon.moves?.[63].move.name}</div>
                <div>{pokemon.moves?.[64].move.name}</div>
                <div>{pokemon.moves?.[65].move.name}</div>
                <div>{pokemon.moves?.[66].move.name}</div>
                <div>{pokemon.moves?.[67].move.name}</div>
                <div>{pokemon.moves?.[68].move.name}</div>
                <div>{pokemon.moves?.[69].move.name}</div>
                <div>{pokemon.moves?.[70].move.name}</div>
                <div>{pokemon.moves?.[71].move.name}</div>
                <div>{pokemon.moves?.[72].move.name}</div>
                <div>{pokemon.moves?.[73].move.name}</div>
                <div>{pokemon.moves?.[74].move.name}</div>
                <div>{pokemon.moves?.[75].move.name}</div>
                <div>{pokemon.moves?.[76].move.name}</div>
            </div>
            </div>
        </div>
    );
};

export default PokemonDetail;