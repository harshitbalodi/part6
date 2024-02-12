import { useQueryClient, useMutation } from "@tanstack/react-query";
import { voteAnecdote } from "../services/anecdoteServices";
import { useNotificationDispatch } from "./NotificationContext";

const Anecdote = ({ anecdote }) => {
    const queryClient = useQueryClient();
    const notificationDispatch = useNotificationDispatch();
    const voteMutation = useMutation({
        mutationFn: voteAnecdote,
        onSuccess: (newAnecdote) => {
            console.log('anecodes mution function')
            notificationDispatch({ type: 'setNotification', payload: `anecdote '${newAnecdote.content}'is liked` });
            setTimeout(() => notificationDispatch({ type: 'setNull' }), 5000);
            const anecdotes = queryClient.getQueryData(['anecdotes']).map(anecdote => anecdote.id === newAnecdote.id ? newAnecdote : anecdote);
            console.log(anecdotes);
            queryClient.setQueryData(['anecdotes'], anecdotes);
        },
        onError:(error)=>{
            console.log('error in mutation')
            notificationDispatch({ type: 'setNotification', payload: `${error}` });
            setTimeout(() => notificationDispatch({ type: 'setNull' }), 5000);
        }
    })

    const handleVote = (anecdote) => {
        voteMutation.mutate(anecdote);
    }
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
        </div>
    )
}

export default Anecdote