import Header from './Header';

function NotFound() {
  return (
    <>
      <Header page="Error"/>
      <h2>Page Not Found</h2>
      <p>お探しのページは見つかりませんでした．</p>
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/info">Info</a></li>
          <li><a href="/provide">Provide</a></li>
          <li><a href="/transfer">Transfer</a></li>
        </ul>
      </div>
    </>
  )
}

export default NotFound;
