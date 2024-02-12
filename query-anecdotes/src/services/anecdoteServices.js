import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes';

export const getall = async ()=>{
    const {data} = await axios.get(baseUrl);
    console.log(data);
    return data;
}
export const createAnecdote = async (content)=>{
    const {data} = await axios.post(baseUrl, {content, votes:0});
    return data;
}

export const voteAnecdote = async (anecdote) =>{
    const {data} = await axios.put(baseUrl+`/${anecdote.id}`,{...anecdote,votes: anecdote.votes+1});
    return data;
}