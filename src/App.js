import styles from './App.module.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import characters from './data.js'

function App () {

  function onSearch(id){
    alert(id)
  }
  return (
    <div className={styles.App} style={{ padding: '25px' }}>
      <div className={styles.container}>
        <NavBar
          onSearch={onSearch}
        />      
        {/* <div id="rick">
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
        </div> */}
        <hr />
        <div>
          <Cards
            characters={characters}
          />
        </div>
        <hr />      
      </div>
    </div>
  )
}

export default App
