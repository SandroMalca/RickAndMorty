import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={styles.SearchBar}>
      <input type='search' />
      <button onClick={()=>props.onClick("not found ID")}>Agregar</button>
      </div>
   );
}
