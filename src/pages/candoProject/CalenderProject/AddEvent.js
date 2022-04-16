import React, { useState } from "react";

function AddEvent() {
    const[title,setTitle]=useState()
    const[start,setStart]=useState(new Date())
    const[end,setEnd]=useState(new Date())

    const onSubmit =(event)=>{
        event.preventDefault();
        onEventAdded({
            title,
            start,
            end
        })
        onclose()
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
          <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
          Date
      </form>
    </div>
  );
}

export default AddEvent;
