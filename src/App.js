import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form'
import Favorites from './components/Favoritos/Favorites'
import {Routes, Route,useLocation, useNavigate} from 'react-router-dom'

function App () {
  // Declaración de variables de estado
  const [characters,setCharacters] = useState([])
  const [access, setAccess]=useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  // funciones 

  useEffect(()=>{
    !access && navigate("/")
    // eslint-disable-next-line
  },[access])
  

  const username = "sandro@hola.com"
  const password = "1sandro"

  function login (userData){
    if(userData.username === username && userData.password === password){
      navigate("/home")
      setAccess(true)
    }
  }

  function onSearch(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          let exist= characters.find((e)=>e.id === data.id)
          if(exist){
            alert("Ese personaje ya existe")
          }else{
            setCharacters((oldChars) => [...oldChars,data]);
          }            
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });  
  }

  function onClose(id){
    setCharacters((data)=>{
      return data.filter((e)=> e.id !== id)
    })
  }
  // renderización
  return (
    <div className={styles.App}>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <div>
        <Routes>
          <Route path="/" element={<Form login={login}/>}></Route>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:detailId" element={<Detail/>}></Route>       
          <Route path='/favorites' element={<Favorites characters={characters} onClose={onClose} />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
