import React from 'react'
import axios from "../api/axios"
import useAuth from './useAuth'
function useRefresh() {

  const { setAuth } = useAuth()

  const refresh = async()=>{
       const response = await axios.get("",{
           withCredentials:true

       });
       setAuth(prev => {
           console.log(JSON.stringify(prev));
           console.log(response.data.accessToken);
           return {...prev , accessToken:response.data.accessToken}
       });
       return response.data.accessToken
  }


  return refresh
}

export default useRefresh