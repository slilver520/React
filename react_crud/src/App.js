import './App.css';

function Header(props) { //컴포넌트

  return  <header>
  <h1><a href="/" onClick={ (event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}
function Nav(props) {
  const lis = [];
  for(let i=0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read'+t.id}
        onClick={ event => {
          event.preventDefault();
          props.onChangeMode(event.target.id);
        }}>{t.title}
      </a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}


function App() {
  const topics = [
    {id:1, title:'html', body:'html 이란..'},
    {id:2, title:'css', body:'css 이란..'},
    {id:3, title:'JS', body:'JS 란..'}
  ];
  return (
    <div>
      <Header title="목록" onChangeMode={ ()=>{
        console.log('홈')
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
          console.log(id)
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
