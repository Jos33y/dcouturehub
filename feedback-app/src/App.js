
function App() {

  const title = 'Blog Post'
  const body = 'This is my blog post'

  const comments = [
    {id: 1, text: 'Comment One'},
    {id: 2, text: 'Comment Two'},
    {id: 3, text: 'Comment Three'},
  ]
  return (
    <div>
      <h3>{title.toUpperCase()}</h3>
      <p>{body}</p>
      <h3>Commnets ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
