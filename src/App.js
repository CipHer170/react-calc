import { useState } from "react";
import "./App.css";
const nerdamer = require("nerdamer/all.min");

function App() {
  const [data, setData] = useState([]);
  const [res, setRes] = useState(0);

  console.log(data);
  // clear
  const clear = () => {
    setData([]);
    console.log(data);
  };

  // functional buttons
  const equals = () => {
    var e = nerdamer(data.join("")).evaluate();
    console.log("nerdamen", e.text());
    setRes(e.text());
    clear();
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="sub-display">{res ? res : data}</div>
        <div className="display" id="display">
          {data != 0 ? data : 0}
        </div>

        <div className="buttons">
          <div className="number-buttons">
            <button id="clear" onClick={clear}>
              AC
            </button>
            <button
              id="divide"
              value={"/"}
              onClick={(e) => setData([...data, e.target.value])}
            >
              /
            </button>
            <button
              id="multiply"
              value={"*"}
              onClick={(e) => setData([...data, e.target.value])}
            >
              x
            </button>
            <button
              id="subtract"
              value={"-"}
              onClick={(e) => setData([...data, e.target.value])}
            >
              -
            </button>
            <button
              id="add"
              value={"+"}
              onClick={(e) => setData([...data, e.target.value])}
            >
              +
            </button>
            <button id="equals" value={"="} onClick={equals}>
              =
            </button>
            <button
              id="zero"
              value={0}
              onClick={(e) => setData([...data, e.target.value])}
            >
              0
            </button>
            <button
              id="decimal"
              value={"."}
              onClick={(e) => setData([...data, e.target.value])}
            >
              .
            </button>
            <span className="numeric">
              <button
                id="one"
                value={1}
                onClick={(e) => setData([...data, e.target.value])}
              >
                1
              </button>
              <button
                id="two"
                value={2}
                onClick={(e) => setData([...data, e.target.value])}
              >
                2
              </button>
              <button
                id="three"
                value={3}
                onClick={(e) => setData([...data, e.target.value])}
              >
                3
              </button>
              <button
                id="four"
                value={4}
                onClick={(e) => setData([...data, e.target.value])}
              >
                4
              </button>
              <button
                id="five"
                value={5}
                onClick={(e) => setData([...data, e.target.value])}
              >
                5
              </button>
              <button
                id="six"
                value={6}
                onClick={(e) => setData([...data, e.target.value])}
              >
                6
              </button>
              <button
                id="seven"
                value={7}
                onClick={(e) => setData([...data, e.target.value])}
              >
                7
              </button>
              <button
                id="eight"
                value={8}
                onClick={(e) => setData([...data, e.target.value])}
              >
                8
              </button>
              <button
                id="nine"
                value={9}
                onClick={(e) => setData([...data, e.target.value])}
              >
                9
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
