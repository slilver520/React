import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';

function App() {
  
  return (
    <Wrapper>
    <div className="gray-box">
      <Hello
        name="react"
        color="red"
        isSpecial
        //주석처리는 이렇게 1
      />
      {/* 주석처리는 이렇게 2 */}

      <Hello 
        color="blue"
      />
    </div>
    <Counter/>
    </Wrapper>
  );
}

export default App;
