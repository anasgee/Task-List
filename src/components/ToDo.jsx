import React from 'react';

const ToDo = (props)=>{

return(
    <>
       <li>
   <i id="crossIcon" class="fa fa-times" aria-hidden="true" onClick={()=>{
    return (
        props.onSelect(props.id)
    )
}}></i>
    {props.text}                             
      </li>
    </>
)

}
export default ToDo; 