import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [expressions, setExpressions] = useState([]);
  const API = '../api/sentences.json';

  useEffect(() => {
    axios.get(API)
    .then((result) => {
      setExpressions(result.data);
    })
    // .then(expressions => {
    //   let sentence = expressions[Math.floor(Math.random() * expressions.sentences)];
    // })
  }, [])

  return (
    <div id="wrapper">
      <div id="container">
        <section className="open-book">
          <header>
            <h1>Expressions à la con</h1>
            <h6>par Tristan et Baptiste</h6>
          </header>
          <article>
            {expressions.map((expression, index) => {
              return (
                <p>{expression}</p>
              )
            })}
          </article>
          <footer>
            <ol id="page-numbers">
              <li>1</li>
              <li>2</li>
            </ol>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
