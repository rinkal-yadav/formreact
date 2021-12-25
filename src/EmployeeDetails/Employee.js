import React, { useState } from 'react'

function Employee() {

    const [userInfo,setuserInfo]=useState(
        {
            name: '' ,
            department : '',
            rating : ''
        }
    )
    
    const[display,setDisplay]=useState([])

    const updateValue = (e)=>{
        setuserInfo({
            ...userInfo,[e.target.name]:e.target.value
        })
        // console.log(userInfo);

    }

    const submited=(e)=>{
        e.preventDefault()
        const setDisplays={...userInfo,id:new Date().getTime().toString()}
        setDisplay(
            ([...display,setDisplays])
        )
        console.log(display);
    }



    return (
        <div>
            <div className='form-head'> EMPLOYEE FEEDBACK FORM </div> <br/><br/>

             <form action=""  onSubmit={submited} >
               <div>                 
                    <label user="name" className='form-label'>Name : </label>                  
                    <input  type="text" className='form-input' name="name" id="name" value={userInfo.name} onChange={updateValue} />  <br/><br/>
                    <label user="name" className='form-label'>Department : </label>                  
                    <input  type="text" className='form-input' name="department" id="department" value={userInfo.department} onChange={updateValue} />    <br/><br/>
                    <label user="name" className='form-label'>Rating : </label>                  
                    <input  type="text" className='form-input' name="rating" id="rating" value={userInfo.rating} onChange={updateValue} />   <br/><br/> 
                 </div>
                 <button type="submit" className='form-submit'  >submit</button>
            </form>

            <div className='flex-box'>
            {
                display.map((value)=>{
                    return(
                       
                            <div className='form-output'>
                                 Name: {value.name}  | Department : {value.department}   | Rating : {value.rating} 
                            </div>

                    )
                })
            }
                       </div>

            
        </div>
    )
}

export default Employee

