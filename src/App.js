import { useState } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Login from "./components/Login"
import {Routes, Route} from 'react-router-dom'

function App () {
  const [characters,setCharacters] = useState([])
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
  return (
    <div className={styles.App} style={{ padding: '25px' }}>
      <div className={styles.container}>
        <div>
          <NavBar onSearch={onSearch}/>
        </div>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:detailId" element={<Detail/>}></Route>          
        </Routes>
      </div>
    </div>
  )
}

export default App
