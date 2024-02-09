/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { likeAnecdoteThunk } from "../reducers/anecdoteReducer";

const List = ({anecdote}) => {
    const dispatch = useDispatch();
    const vote = async () => {
        try{
        dispatch(likeAnecdoteThunk(anecdote.id, anecdote));
        }catch(error){
            console.log(error);
        }
        
    }
    return <>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={vote}>vote</button>
        </div>
    </>
}

const AnecdoteList = () => {
    const anecdotesList = useSelector(({ anecdotes, filter }) => {
        const list = filter === '' ? [...anecdotes] : [...anecdotes].filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));
        return [...list].sort((a, b) => b.votes - a.votes)
    });
    return (
        <div>
            {anecdotesList.map(anecdote => 
               <List
                key = { anecdote.id }
                anecdote = {anecdote}  
               />
            )}
        </div>
    )
}

export default AnecdoteList