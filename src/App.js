import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="display" id="display">
          Display
        </div>
        <div className="buttons">
          <div className="number-buttons">
            <button id="clear">AC</button>
            <button id="divide">/</button>
            <button id="multiply">x</button>
            <button id="subtract">-</button>
            <button id="add">+</button>
            <button id="equals">=</button>
            <button>0</button>
            <button id="decimal">.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /* <div className="control-buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div> */
}
