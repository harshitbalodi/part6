import { useDispatch } from 'react-redux';
import { asObject } from '../reducers/anecdoteReducer';
const AnecdoteForm = () => {
    const dispatch =  useDispatch();
    const handleCreate = (e) => {
        e.preventDefault();
        const anecdote = e.target.elements.anecdote.value; 
        e.target.elements.anecdote.value = '';
        dispatch({ type: 'anecdotes/newAnecdote', payload: asObject(anecdote)});
        dispatch({type:'notification/setNotification', payload:`${anecdote} is added`});
        setTimeout(()=>dispatch({type:'notification/setNotification', payload:null}),5000)
      }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleCreate}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm