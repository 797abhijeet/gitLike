import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const [value, setValue] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>Value: {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        Decrement -
      </button>

      <br /><br />

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

  
    </div>
  );
}

export default App;
