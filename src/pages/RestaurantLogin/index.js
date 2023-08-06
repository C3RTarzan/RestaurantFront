import './styles.scss';
import './stylesMedia.scss';
import { Icon } from '@iconify/react';
import React, { useState, useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';

import { Context } from '../../context/UserContext';
import Message from '../../components/message';
//import MyAutosuggest from '../components/MyAutosuggest';

function RestaurantLogin(){
    const [user, setUser] = useState({})
    const {login} = useContext(Context)


    function handleOnChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        login(user) 
    }

    useEffect(() => {
        //focus
        const handleKeyPress = (event) => {
          if (event.key === 'F1') {
            event.preventDefault();
            document.querySelector(".inputlogin").focus()
           
          }
        };
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [user]);

    return(
        <>
        <main id='Login'>
            
            <div className='box'>
                <div className='Logo'>
                    <div className='img-logo'>
                        <span>LOGO DO REET</span>
                    </div>
                </div>
                <div className='Form'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-form'>
                            <div>
                                <span className='ref'> CPF / ID </span>
                                <InputMask
                                    className='inputlogin'
                                    mask="999.999.999-99"
                                    maskChar=""
                                    inputMode='numeric'
                                    placeholder='Aperte F1 para focar'
                                    onChange={handleOnChange}
                                    name='user'
                                    required
                                />
                            </div>
                            <div>
                                <span className='ref'> Senha </span>
                                <InputMask
                                    className='inputPass'
                                    mask="********"
                                    maskChar=""
                                    type='password'
                                    onChange={handleOnChange}
                                    name='pass'
                                    required
                                />
                            </div>
                        </div>
                        <Message />
                        <div className='icon'>
                            <button><Icon icon="ph:arrow-circle-right-fill" /></button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className='LogoComp'>
                <span>LOGO</span>
            </div>
            {/* <div className='Form'>
                <div className='title-Form'>
                    <span>Login</span>
                </div>
                <div className='itens-Form'>
                    <form onSubmit={handleSubmit}>
                       <InputMask
                            className='inputlogin'
                            mask="999.999.999-99"
                            maskChar=""
                            inputMode='numeric'
                            placeholder='CPF ou ID'
                            onChange={handleOnChange}
                            name='login'
                       />
                       <InputMask
                            className='inputPass'
                            mask="********"
                            maskChar=""
                            type='password'
                            placeholder='Senha'
                            onChange={handleOnChange}
                            name='pass'
                       />
                       <InputMask
                            value="Entrar"
                            type='submit'
                       />
                    </form>
                </div>

            </div>
            <div className='Logo'>

            </div> */}
        </main>
        </>
    )
}

export default RestaurantLogin;