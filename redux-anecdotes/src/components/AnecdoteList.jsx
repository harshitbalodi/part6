/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

const List = ({anecdote}) => {
    const dispatch = useDispatch();
    const vote = (id) => {
        dispatch({ type: 'anecdotes/likeAnecdote', payload: id });
        dispatch({type:'notification/setNotification', payload:`You liked ${anecdote.content}`})
        setTimeout(()=>dispatch({type:'notification/setNotification', payload:null}),5000)
    }
    return <>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
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