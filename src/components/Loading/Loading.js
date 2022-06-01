import React from 'react';
import ReactLoading from 'react-loading';
import useStyles from "./styles";



const Loading = ({ type, color }) => (

<div >
    <ReactLoading type="spinningBubbles" color={color} height={"100%"} width={"100%"} />
    <p>در حال برقراری ارتباط با سرور</p>
</div>
);
 
export default Loading;
