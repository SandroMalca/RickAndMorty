import { Link } from 'react-router-dom';
import styles from './Card.module.css'
export default function Card(props) {
   return (
      <div className={styles.card}>
         <button onClick={props.onClose}>X</button>
         <div className={styles.txt}>
            <Link className={styles.link} to={`/detail/${props.id}`} >
               <h2>{props.name}</h2>
               <p>{props.species}</p>
               <p>{props.gender}</p>
               <img  src={props.image} alt={props.image} />
            </Link>
         </div>
      </div>
   );
}
