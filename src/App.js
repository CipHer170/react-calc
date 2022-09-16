import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const clearData = () => {
    setData([]);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display" id="display">
          {data}
        </div>

        <div className="buttons">
          <div className="number-buttons">
            <button id="clear" onClick={(e) => clearData(e)}>
              AC
            </button>
            <button id="divide">/</button>
            <button id="multiply">x</button>
            <button id="subtract">-</button>
            <button id="add">+</button>
            <button id="equals">=</button>
            <button id="zero">0</button>
            <button id="decimal">.</button>
            <span className="numeric">
              <button id="one">1</button>
              <button id="two">2</button>
              <button id="three">3</button>
              <button id="four">4</button>
              <button id="five">5</button>
              <button id="six">6</button>
              <button id="seven">7</button>
              <button id="eight">8</button>
              <button id="nine">10</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{
}
