import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css';

const UserInput = () => {

    const [ userName, setUserName ] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        dispatch(changeUser(userName));
        navigate('/pokedex');
       }
    return (
        <div className='background-user'>
            <form onSubmit={submit} >
            <div className='input-container'>
            <h1 className='h1-input'>Hello trainer!</h1>
            <div className='img-input'>
            <img src={"https://i.gifer.com/WiCJ.gif"} alt="" className='img-pikachu'/>
            </div>
            <div className='input-position'>
            <div className='name'>
                Give me your name to start
            </div>
            <input 
            type="text" 
            placeholder='Please, type your name here...'
            className='edit-input'
            value={userName}
            onChange={e => setUserName(e.target.value)}/>
            <button className='button-input'>
                <i class="fa-solid fa-paper-plane"></i>
            </button>
            </div>
            </div>
        </form>
        </div>

    );
};

export default UserInput;