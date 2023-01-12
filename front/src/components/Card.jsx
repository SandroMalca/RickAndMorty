import { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addChar, deleteChar} from '../redux/actions';
import styles from './Card.module.css'

export function Card(props) {
   let [isFav,setIsFav]=useState(false)

   function handleFavorite(){
      if(isFav===true){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }
      if(isFav===false){
         setIsFav(true)
         props.addFavorite(props)
      }
   }
   
   console.log("MY FAVORITES ->",props.myFavorites)

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [props.myFavorites]);

   return (
      <div className={styles.card}>    
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )}       
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

export function mapStateToProps(state) {
   return{
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite:(char)=>{dispatch(addChar(char))},
      deleteFavorite:(id)=>{dispatch(deleteChar(id))}
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)
