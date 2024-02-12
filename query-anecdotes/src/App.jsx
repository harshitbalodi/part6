import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery,  } from '@tanstack/react-query'
import { getall } from './services/anecdoteServices'
import Anecdote from './components/Anecdote'

const App = () => {
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getall,
  })
  if (result.isLoading) {
    return <div>loading...</div>
  }

  if (result.isError) {
    return <div>annecdote service is not available due problem in server</div>
  }
  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <Anecdote 
        key={anecdote.id}
        anecdote={anecdote}
        />
      )}
    </div>
  )
}

export default App
