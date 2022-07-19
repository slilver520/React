import './App.css';
import { useState } from 'react';

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

    lis.push(
    <li key={t.id}>
      <a id={t.id} href={'/read'+t.id}
        onClick={ event => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
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
function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;

      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder='title'/></p>
      <p><textarea name="body" placeholder='body'></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
  <h2>Update</h2>
  <form onSubmit={event => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    props.onUpdate(title, body);
  }}>

    <p><input type="text" name="title" placeholder='title' value={title}
      onChange={event=>{
        setTitle(event.target.value);
      }}/></p>
    <p><textarea name="body" placeholder='body' value={body}
      onChange={event=>{
        setBody(event.target.value);
      }}
    ></textarea></p>
    <p><input type="submit" value="Update"></input></p>
  </form>
</article>
}


function App() {
  const [mode, setMode]= useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html 이란..'},
    {id:2, title:'css', body:'css 이란..'},
    {id:3, title:'JS', body:'JS 란..'}
  ]);

  let content = null;
  let contextControl = null;
 
  if(mode === 'WELCOME'){
    content = <Article title="메인 페이지" body="Hello, home"></Article>;
  }else if(mode === 'READ') {
    let title, body = null;
    for(let i = 0; i< topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl =<>
      <li><a href={"/update/"+id}
        onClick={event => {
          event.preventDefault();
          setMode('UPDATE');
        }}>Update</a></li>
      <li><input type="button" value="Delete"
        onClick={()=>{
          const newTopics = [];

          for(let i=0; i<topics.length; i++){
            if(topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('WELCOME');
        }}
      /></li>
    </>;

  }else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);

      //primitive type (string, number, boolean, undefined, null)
      //범객체(object, array) - 복제해야한다.
      //  newValue = {..value}
      //  push
      //  setValue(newValue)
    }}></Create>
  }else if(mode === 'UPDATE') {
    let title, body = null;
    for(let i = 0; i< topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, boby)=>{
      const newTopics = [...topics];
      const updatedTopic = {id:id, title:title, body:body};

      for(let i=0; i<newTopics.length; i++) {
        if(newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');

    }}></Update>
  }

  const aStyle = {
    backgroundColor:"#b3e4ffad",
    padding:"30px"
  }
  return (
    <div>
      <Header title="home" onChangeMode={ ()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      <div style={aStyle}>
        {content}
        <ul>
          <li>
            <a href="/create" onClick={ event =>{
              event.preventDefault();
              setMode('CREATE');
            }}>추가</a>
          </li>
          {contextControl}
        </ul>
      </div>
    </div>
  );
}

export default App;

//useReducer
