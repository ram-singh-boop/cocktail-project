import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const STATUES = Object.freeze({
//   IDLE:'idle',
//   ERROR:'error',
//   LOADING:'loading',
// });

const initialState = { 
  loading:false,
  cocktails:[],
  error:'error',
  cocktail:[],
}


const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(fettchdatas.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    })
    
    .addCase(fettchdatas.fulfilled, (state, action) => {
        // Add user to the state array
        state.loading = false;
        state.cocktails = action.payload.drinks;
      
        
      })
      .addCase(fettchdatas.rejected, (state, action) => {
        // Add user to the state array
        state.error  = action.payload.drinks;

      })




      .addCase(fettchdatasSingle.pending, (state, action) => {
        // Add user to the state array
        state.loading = true;
      })
      .addCase(fettchdatasSingle.fulfilled, (state, action) => {
          // Add user to the state array
          state.loading = false;
          state.cocktail = action.payload.drinks;
        
          
        })
        .addCase(fettchdatasSingle.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload.drinks;
  
        })



        .addCase(fettchSearchCoktailss.pending, (state, action) => {
          // Add user to the state array
          state.loading = true;
        })
        .addCase(fettchSearchCoktailss.fulfilled, (state, action) => {
            // Add user to the state array
            state.loading = false;
            state.cocktail = action.payload.drinks;
          
            
          })
          .addCase(fettchSearchCoktailss.rejected, (state, action) => {
            // Add user to the state array
            state.loading = false;
            state.error  = action.payload.drinks;
    
          })
  



  },
})

export const { increment } = cocktailSlice.actions
export default cocktailSlice.reducer

// First, create the thunk
export const fettchdatas = createAsyncThunk('productss/fetchs', async () => {
  const allData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
  const responseData = await allData.data;
  return responseData;
//console.log(responseData);
}, );


// First, create the thunk
export const fettchdatasSingle = createAsyncThunk('productss/fetchsSinleproduct', async ({id}) => {
  const allDatas = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const responseDataw = await allDatas.data;
  return responseDataw;
//console.log(responseData);
}, );

// First, create the thunk
export const fettchSearchCoktailss = createAsyncThunk('productss/fettchSearchCoktailss', async ({searchText}) => {
  const allDatasSearch = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
  const responseDatawSearch = await allDatasSearch.data;
  return responseDatawSearch;
//console.log(responseData);
}, );