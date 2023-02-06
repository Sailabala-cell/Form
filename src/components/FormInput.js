import React , {useRef} from 'react'
import "./forminput.css"
import { useState } from 'react'
function FormInput(props) {
    const [focused, setFocused] = useState(false)

    const {label,errorMessage,onChange,id,value,...inputProps} = props

    const inputRef = useRef(null);
    const handleFocus=(e)=>{
        setFocused(true)
        if(!value){ inputRef.current.focus()}
       
    }
   
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input 
      {...inputProps} 
      
      onChange={onChange} 
      
      required 
      onBlur={ handleFocus} 
      onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true) 
        }
      focused={focused.toString()} 
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
