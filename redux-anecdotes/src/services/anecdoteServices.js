import axios from "axios";
const baseUrl ="http://localhost:3001/anecdotes";

 const getAll = async() =>{
    const response =  await axios.get(baseUrl);
    return response.data;
}
 const createAnecdote = async (anecdoteObj)=>{
    const response = await axios.post(baseUrl,{content:anecdoteObj,votes:0});
    return response.data;
}

 const updateAnecdote =async(id, anecdoteObj)=>{
    const response = await axios.put(baseUrl+`/${id}`,{...anecdoteObj,votes:anecdoteObj.votes+1});
    return response.data;
}
export  {getAll,createAnecdote, updateAnecdote}