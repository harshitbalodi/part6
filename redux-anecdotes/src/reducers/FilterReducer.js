import { createSlice } from "@reduxjs/toolkit";

const initialState = '';
export const FilterSetter =(text)=>{
    return {type:'filter/setFilter', payload:text}
}


const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        setFilter(state, action){
            console.log("filterReducer:",action);
            return action.payload;
        }
    }
})

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;