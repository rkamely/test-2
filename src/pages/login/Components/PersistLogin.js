import React, { useEffect, useState } from 'react'
import useRefresh from '../../hooks/useRefresh'
import useAuth from "../../hooks/useAuth"


function PersistLogin() {
    const [isLoading , setIsLoadong] =useState(true)
    const refresh = useRefresh()
    const Auth = useAuth()
 useEffect(()=>{
     const VerifyRefreshToken = async()=>{
         try {
               await refresh()
         }
         catch(err){
             console.log(err);
         }
         finally{
             setIsLoadong(false)
         }
     }
     !Auth?.Token? VerifyRefreshToken():setIsLoadong(false);
 },[])
 useEffect(()=>{
  console.log(`isLoading : ${isLoading}`)
  console.log(`aT:${Json.stringify(auth?.Token)}`);

 },[isLoading])
  return (
    <div>
        {isLoading
        ? <p>Loading ... </p>:
        <p>outlet</p>
        }
    </div>
  )
}

export default PersistLogin;