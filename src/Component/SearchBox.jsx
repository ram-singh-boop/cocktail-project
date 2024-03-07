import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fettchSearchCoktailss } from '../Redux/Slice/CokatailSlice';

 const SearchBox = () => {
    const searchitem = useRef();
    const dispatch = useDispatch()


    const handleChange = () => {
      const searchTextt = searchitem.current.value;
      dispatch(fettchSearchCoktailss({searchTextt}));
    }

    const handleSubmit = (e) => {
        e.preventdefault()

    }



  return (
    <>
 
    
    <form className='mt-3' onSubmit={handleSubmit}>

  <div className="form-group">
 
    <input type="email" ref={searchitem} className="form-control" id="email"
     onChange={handleChange}  placeholder='Use Here'/>

  </div>
 
  <button type="submit" className="btn btn-primary mb-2 mt-2">Submit</button>


</form>
    
    </>
  )
}

export default SearchBox;
