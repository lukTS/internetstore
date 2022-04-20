import PropTypes from 'prop-types';
import { useState } from 'react';

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  changeCntP: PropTypes.func.isRequired,
  curent: PropTypes.number.isRequired
}

function Counter({min, max, changeCntP, curent}) {
  let [newCurent, setNewCurent] = useState(curent)

  function fillInput(e) {
    let element = parseInt(e.target.value)
    let val = isNaN(element) ? min: element
    checkMinMax(val)
  }
  
  function checkMinMax (number) {
    let n = Math.max(min, Math.min(max, number))
    changeCntP(n)
    setNewCurent(n)
  }

  function decriment() {
    checkMinMax(curent-1);
  }

  function incriment() {
    checkMinMax(curent+1);
  }

  return (
    <>
      <button onClick={decriment}>decriment</button>
      <input onBlur={fillInput} value={newCurent} onChange={(e)=>setNewCurent(e.target.value)} />
      <button onClick={incriment}>incriment</button>
    </>
  );
}

export default Counter;
