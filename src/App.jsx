import Markdown from 'marked-react';
import { useState } from 'react';

import './style.scss';

function App() {
  const [text, setText] = useState('')

  const textHandler = (e) => {
    const data = e.target.value
    console.log(data)
    setText(data)
  }

  return (
    <div className='container'>
      <p className='title'>Write Your Markdown in the left box</p>
      <div className="main-container">
      <textarea onChange={textHandler}  className='main-container__text-area' placeholder='Insert Markdown Here...'></textarea>
      <div className='main-container__markdown'>
        <Markdown>{text}</Markdown>
      </div>
    </div>
    </div>
  );
}

export default App;
