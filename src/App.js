import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';

function App() {
  
  return (
    <Wrapper>
    <div className="gray-box">
      <Hello
        name="react"
        color="red"
        //주석처리는 이렇게 1
      />
      {/* 주석처리는 이렇게 2 */}

      <Hello 
        color="blue"
      />
    </div>
    </Wrapper>
  );
}

export default App;
