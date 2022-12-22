import React,{useState} from 'react'
import styles from "./Form.module.css"


export default function Form(props) {
    const [userData,setUserData] = useState({
        username:"",
        password:""
    })
    const [errors,setError] = useState({
        username:"",
        password:""
    })
    const validate=(e)=>{
        let errors ={}
        const regexEmail=/\S+@\S+\.\S+/
        const regexPass = new RegExp(
            "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$");

        if(!regexEmail.test(e.username)){
            errors.username="Ingrese un email correcto"
        }    
        if(!e.username){
            errors.username="Agregar un nuevo username"
        }
        if(e.username.length > 35){
            errors.username="Max 35 caracteres"
        }
        if(!regexPass.test(e.password)){
            errors.password="Ingresar de 6-10 caracteres"
        }
        return errors
    }

    const handleInputsChange=(e)=>{
        setError(validate({
            ...userData,
            [e.target.name]:e.target.value
        }))
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()   
        props.login(userData)      
    }
    
  return (
    <form className={styles.cont} onSubmit={handleSubmit}>
        <label className={styles.username} htmlFor="username" name="username">Username: </label>
        <input type='text' name="username" value={userData.username} onChange={(e)=> handleInputsChange(e)} />
        <p className={styles.alerta}>{errors.username && errors.username}</p>
        <label className={styles.pass} htmlFor="password" name="password">Password: </label>
        <input type='password' name="password" value={userData.password} onChange={(e)=> handleInputsChange(e)} />
        <p className={styles.alerta}>{errors.password && errors.password}</p>
        <button type='submit'>Ingresar</button>
    </form>
  )
}
