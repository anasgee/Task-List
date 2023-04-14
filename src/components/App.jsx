import React, { useState } from 'react';
import ToDo from "./ToDo"


const App = ()=>{
    const [fullName, uFullName] = useState('');
    const [Items,uItems]= useState([]);
    

      const inputEvent = (e)=>{
        uFullName(e.target.value);
    }
    const buttonEvent = ()=>{
        uItems((oldData)=>{
        return    [...oldData, fullName];
        })
     uFullName("");  
    };
    const deleteItem = (id) =>{
        // console.log('deleted')
            uItems((oldData)=>{
          return oldData.filter((currItem,index)=>{
                    return index !==id;
                })
            })      
    }




    return(
        <>
            <div className='parentDiv'>
                <div className='mainDiv'>
                        <div className='todoDiv'>
                            <h1>TaSk LiSt</h1>
                            <button  className='button' onClick={buttonEvent}>+</button>
                        </div>
                            <input placeholder='Enter Your Item' type='text' className="input" onChange={inputEvent} value={fullName}/>
                        <ol>
                        { Items.map((itemVal,index)=>{
                         return( <ToDo
                            text = {itemVal}
                            id={index}
                            key={index}
                            onSelect= {deleteItem}
                          />)
                            }
                        )}
                        </ol>
                </div>
            </div>
        </>
    )


}
export default App;