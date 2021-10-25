import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Button from './Button';
import Input from './Input';


const App: React.FC = () => {

  const [counter, setCounter] = useState<number>(0)
  const [text, setText] = useState<string[]>([])

  const handleClick = () => {
    setCounter(counter + 1)
  }
  
  const handleEnter = (txt: string) => {
    setText([...text, txt])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header
          text="The button increments the number below."
          number={counter}
        >
          <Input handleEnter={handleEnter} />
          <Button title="Button" handleClick={handleClick}/>
        </Header>
        {text.map(txt => (
            <div>{txt}</div>
          ))}
      </header>
    </div>
  );
}

export default App