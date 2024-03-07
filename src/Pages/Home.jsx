import React,{useEffect} from 'react';
import { useSelector, useDispatch } from  'react-redux';
import { fettchdatas } from '../Redux/Slice/CokatailSlice';
import { Link } from "react-router-dom";
import SearchBox from '../Component/SearchBox';


 const Home = () => {
  const dispatch = useDispatch();
    const{cocktails, loading, error} = useSelector((state) => state.product);

    useEffect(()=>{

      dispatch(fettchdatas());
  
    
    },[]);

    if(loading){
      return <h2>Loading... </h2>;
    }
    // if(error){
    //   return <h2>{error.message} </h2>;
    // }

  return (
    <>
<div class="container">
  <div class="row">
    <SearchBox />
   
{cocktails.map((currentElem, i) => {
  const{idDrink,strAlcoholic,strDrinkThumb,strGlass,strDrink} = currentElem
      return <>
      
      <div className="col-md-3 mb-4 " key={idDrink}>
        <div className='card pt-3 pb-3 ps-3 pe-3' >
     <img src={strDrinkThumb} width={200} height={300} /> 
     
      <strong>{strAlcoholic}</strong>
      <strong>{strGlass}</strong>
      <strong>{strDrink}</strong>
      <Link to={`/products/${idDrink}`} className="btn btn-primary">Details</Link>

      </div>
      </div>
      </>
    })}
</div>
</div>
    </>
  )
}

export default Home
