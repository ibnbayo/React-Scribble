function Joke({setup, punchline, upvotes, downvotes,comments,isPun}) {
    return(
        <div>
            {{setup} && <h3> {setup}</h3>}
            <p> {punchline} </p>
            <p>upvotes: {upvotes}</p>
            {{downvotes}? <div>downvotes: {downvotes}</div>: ''}
            <div>{comments}</div>
            <div>{isPun}</div>
            
        </div>

    )
}
export default Joke