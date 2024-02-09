import { createSlice } from "@reduxjs/toolkit";
import { getAll, createAnecdote, updateAnecdote } from "../services/anecdoteServices";
import { setNotificationThunk } from "./NotificationReducer";

const initialState = [];

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState,
  reducers:{
    likeAnecdote(state, action){
      console.log(action.payload);
      const newState = state.map((anecdote) => {
        if (anecdote.id !== action.payload.id) return anecdote;
        return { ...anecdote, votes: anecdote.votes + 1 };
      });
      return newState;
    },
    newAnecdote(state, action){
      console.log(action.payload);
      const newState = [...state, action.payload];
      return newState;
    }
    ,
    setAnecdotes(state, action){
      return action.payload;
    }
  }
})
export const {likeAnecdote, newAnecdote, setAnecdotes} = anecdoteSlice.actions;

export const intailizeAnecdotes =()=>{
  return async dispatch=>{
    const data = await getAll();
    dispatch(setAnecdotes(data));
  }
} 
export const addAnecdote= (anecdote)=>{
  return async dispatch =>{
    const data =await createAnecdote(anecdote);
    dispatch(newAnecdote(data));
    dispatch(setNotificationThunk(`${data.content} is added`,5))
  }
}

export const likeAnecdoteThunk=(id, anecdote)=>{
  return async dispatch=>{
    const data =await updateAnecdote(id, anecdote);
    console.log(data);
    dispatch(likeAnecdote(data));
    dispatch(setNotificationThunk(`You liked ${data.content}`,5));
  }
}


export default anecdoteSlice.reducer;

