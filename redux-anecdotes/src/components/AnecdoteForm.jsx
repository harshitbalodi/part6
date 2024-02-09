import { useDispatch } from 'react-redux';
import {addAnecdote} from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
    const dispatch =  useDispatch();
    const handleCreate = async (e) => {
        e.preventDefault();
        const anecdote = e.target.elements.anecdote.value; 
        e.target.elements.anecdote.value = '';
        dispatch(addAnecdote(anecdote))
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