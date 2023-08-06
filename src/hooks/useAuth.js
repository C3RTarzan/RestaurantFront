import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage';


export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
    const {setFlashMessage} = useFlashMessage();
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true);
        
        }
    }, [])

    async function register(user){
        let msgText = 'Cadastro realisado com sucesso!';
        let msgType = 'success';  
          
        try {
            const data = await api.post('/users/register', user).then((response) =>{
                return response.data
            })
            await authUser(data)
        } catch (error) {
            msgText = error.response.data.message;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType)
    }
    async function googleAuth(user){
        let msgText = 'Cadastro realisado com sucesso!';
        let msgType = 'success';  

        user.user = user.displayName
        user.pass = user.idToken
        user.confPass = user.idToken
        user.localId = user.idToken

        try {
            const data = await api.post('/users/register', user).then((response) =>{
                return response.data
            })
            await authUser(data)
        } catch (error) {
            msgText = error.response.data.message;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType)
    }

    

    async function login(user){
        let msgText = 'Login realisado com sucesso!';
        let msgType = 'success';       
        try{
            const data = await api.post('/Restaurante', user).then((response) =>{
                return response.data
            })

            await authUser(data)

        } catch(error){
            msgText = error.response.data.message;
            msgType = 'error';
        }

        setFlashMessage(msgText, msgType)
    }

    async function authUser(data){

        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/Restaurante/Mesas')

    }

    function logout(){
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')
    }

    return { authenticated, register, logout, login, googleAuth}
}