import React, { useState } from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
import styles from './favorites.module.css'
import { useDispatch } from 'react-redux'
import { filterCards, orderCards ,
  deleteChar} from '../../redux/actions'

export function Favorites(props) {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  //const [order, setOrder]=useState(false)
  
  
  function handleOrder(e){
    dispatch(orderCards(e.target.value))
    //setOrder(!order)
  }

  function handleFilter(e){
    dispatch(filterCards(e.target.value))
  } 
  function onCloseGral(id) {
    props.onClose(id);
    dispatch(deleteChar(id));
  }

  return (
    <div className={styles.cards}>
        <div>
          <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        {myFavorites?.map((c,index)=>{
            return(
                <Card
                key={index}
                id={c.id}
                name={c.name}
                species={c.species}
                gender={c.gender}
                image={c.image}
                onClose={()=>onCloseGral(c.id)}></Card>
            )
        })}
    </div>
  )  
}
            
    
export function mapStateToProps(state){
  console.log(">>>>",state.myFavorites)
    return{
      myFavorites: state.myFavorites
    }  
  }
export default connect(mapStateToProps,null)(Favorites); 