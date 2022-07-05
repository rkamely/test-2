import React, { useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { register } from '../../../serviceWorker';
import * as yup from "yup";

    const schema=yup.object().shape({
        files:yup.mixed().test('required',"لطقا فایل را انتخاب کنید", value=>{
            return value && value.length;
        })
    })

    function Youtube(){
        const{
            register,
            handleSubmit,
            watch,
            formState:{errors},
        } = useForm({
            resolver: yupResolver(schema)
        })
 
     const [ image , setImage ] = useState('')

     const convert2base64 = file =>{
         const reader = new FileReader();
         reader.onloadend = () =>{
             setImage(reader.result.toString())
         };
         reader.readAsDataURL(file)
     }
    const onSubmit=(data)=>{
        console.log("dataaaa",data);
        if(data.files.length > 0){
            convert2base64(data.files[0])
        }
    }
  return (
    <div>
        {image ? <img src={image} width="450"/>:null}
        <form onSubmit={handleSubmit(onSubmit)}>
            {!watch("files")||watch("files").length===0?(
            <div>
                <input type='file'  id="fileuploaded" {...register("files")} style={{cursor:"pointer"}}/>
                <label htmlFor='fileuploaded' style={{cursor:"pointer"}}>selectFile</label>
            </div>):(<strong>{watch("files")[0].name}</strong>)}
            <button type='submit' className='btn'>
                Submit
            </button>
            {errors.files && <div className='error'>{errors.files.message}</div>}
        </form>
    </div>
  )
}

export default Youtube