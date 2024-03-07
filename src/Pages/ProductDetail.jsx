import React,{useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from  'react-redux';
import { fettchdatasSingle } from '../Redux/Slice/CokatailSlice';

 const ProductDetail = () => {
  const {loading, cocktail} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(()=>{

    dispatch(fettchdatasSingle({id}));
    //console.log(cocktail);
   

  },[dispatch, id]);

if(loading){
      return <h2>Loading... </h2>;
      
    }
    
  return (

    <>
    

    <div className='container'>
      <div className='row'>
      <h3>ProductDetail</h3> 
    <Link to="/">Go Back</Link>

      {cocktail.map((currentElem, i) => {
        const {strTags,strDrink,idDrink,strCategory, Classics,strDrinkThumb,strInstructions,strIngredient1 } = currentElem;
        return<>
        <div className='col-md-4' key={i}>
          <img src={strDrinkThumb} width={400} />
        </div>
        <div className='col-md-8'>
         <h2>Name:{strDrink}</h2>
         <h2>Category:{strCategory}</h2>
         <p>{strInstructions}</p>
         <h2>Category:{strDrink}</h2>
         <h2>Category:{Classics}</h2>
         <h2>Category:{idDrink}</h2>
         <h2>Ingredient:{strIngredient1}</h2>
        </div>
        </>
        })}

      </div>
    </div>
    
    
    </>
  )
}

export default ProductDetail;
