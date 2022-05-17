import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'

function PreviewImage(props) {
    const [ preview, setPreview]=useState(null)
    const reader=new FileReader();
    reader.readAsDataURL(props.file);
    reader.onload=()=>{
        setPreview(reader.result);
    }

  return (
    <div>
       { preview?<Avatar src={preview} alt="preview"  style={{width:"200px",height:"200px"}}/>:"Loading..."}
    </div>
  )
}

export default PreviewImage