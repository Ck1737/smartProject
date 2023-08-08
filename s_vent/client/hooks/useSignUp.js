import { useState } from 'react';
import axios from 'axios';
//import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    //const [error, setError] = useState(null)
    //const [isLoading, setIsLoading] = useState(null);

    const signup = async(username,firstName,lastName,password,email,role ) => {
        //setIsLoading(true)
        //setError(null)
        await axios.post('http://localhost:4000/user',{
            username:username,
            firstName:firstName,
            lastName:lastName,
            password:password,
            email:email,
            role:role
        }).then((response)=>{
            localStorage.setItem('user', JSON.stringify(response.data));

            //dispatchEvent({type:'LOGIN', payload:response.data})

            //setIsLoading(false)
        },(error)=>{

        });
        
    }
      
    return {signup};
}