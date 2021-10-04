import React, { useState } from "react";

const initialValue = {
  isTitleShow: false,
  counter: 0,
};

const Hooks = () => {
  const [state, setState] = useState({ ...initialValue });
  //   const [isTitleShow, setIsTitleShow] = useState(false);
  //   const [counter, setCounter] = useState(0);

  const toggleTitle = () => {
    setState((prev) => ({ ...prev, isTitleShow: !prev.isTitleShow }));
  };

  const setIncrement = () =>
    setState((prev) => ({ ...prev, counter: prev.counter + 1 }));

  const setDecrement = () =>
    setState((prev) => ({ ...prev, counter: prev.counter - 1 }));

  const reset = () => setState((prev) => ({ ...prev, counter: 0 }));

  //   ==========================

  //   const toggleTitle = () => {
  //     setIsTitleShow((value) => !value);
  //   };

  //   const setIncrement = () => setCounter((prev) => prev + 1);

  //   const setDecrement = () => setCounter((prev) => prev - 1);

  //   const reset = () => setCounter(0);

  return (
    <div>
      {state.isTitleShow && <h2>Hello Hooks</h2>}
      <button type='button' onClick={toggleTitle}>
        {state.isTitleShow ? "HIDE" : "SHOW"}
      </button>
      <hr />
      <h2>{state.counter}</h2>
      <button type='button' onClick={setIncrement}>
        Increment
      </button>
      <button type='button' onClick={setDecrement}>
        Decrement
      </button>
      <button type='button' onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Hooks;

// const arr = [1,2,3,4];
// const [dtfghj,value] = arr

// class Hooks extends Component {
//     state = {
//         isTitleShow: false
//      }

//      setIsTitleShow = () => {
//          this.setState(prev=>({isTitleShow: !prev.isTitleShow}))
//      }
//     render() {
//         return (
//             <div>
//       {this.state.isTitleShow && <h2>Hello Hooks</h2>}
//       <button type="button" onClick={this.setIsTitleShow}>Show</button>
//     </div>
//         );
//     }
// }

// export default Hooks;
