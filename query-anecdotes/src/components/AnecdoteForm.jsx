import { createAnecdote } from "../services/anecdoteServices"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNotificationDispatch } from "./NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const notificationDispatch = useNotificationDispatch();
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      console.log("new annecdote", newAnecdote);
      notificationDispatch({ type: 'setNotification', payload: `anecdote '${newAnecdote.content}'is added` });
      setTimeout(() => notificationDispatch({ type: 'setNull' }), 5000);

      const anecdotes = queryClient.getQueryData(['anecdotes']).concat(newAnecdote);
      queryClient.setQueryData(['anecdotes'], anecdotes);
    },
    onError: (error) => {
      console.log('mutation error', error);
      notificationDispatch({ type: 'setNotification', payload: `${error.response.data.error}` });
      setTimeout(() => notificationDispatch({ type: 'setNull' }), 5000);
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content);
  }
  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
