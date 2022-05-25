import { SpeakerPhoneSharp } from '@material-ui/icons'
import React, { useContext, useEffect } from 'react'
import { useUserDispatch } from '../../context/UserContext'
import { axiosPrivate } from '../api/axios'
import AuthContext from '../context/AuthProvider'
import useAuth from './useAuth'
import useRefresh from './useRefresh'

function useAxiosPrivate() {
    const userDispatch = useUserDispatch();

    const refresh = useRefresh()
    // const {Auth} = useAuth()
    const {  auth  } = useContext(AuthContext)

    useEffect(()=>{

        const requestIntercept = axiosPrivate.interceptors.request.use(
            
            config => {
                // if (!config.headers['token']) {
                    config.headers['token'] = `${auth.token}` ;
                // }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response ,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 
                    // && !prevRequest?.sent
                    )
                     {
                    // prevRequest.sent = true;
                    localStorage.removeItem("token");
                    userDispatch({ type: "SIGN_OUT_SUCCESS" });
                    // history.push("/login");
                    // const newAccessToken = await refresh();
                    // prevRequest.headers['token'] = `${auth.token}` ;
                    // return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );  

        return ()=>{
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    },[auth])

return axiosPrivate
}

export default useAxiosPrivate