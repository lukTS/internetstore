import PropTypes from 'prop-types';

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  changeCntP: PropTypes.func.isRequired,
  curent: PropTypes.number.isRequired
}

function Counter({min, max, changeCntP, curent}) {

  function fillInput(e) {
    let element = parseInt(e.target.value)
    let val = isNaN(element) ? min: element
    checkMinMax(val)
  }
  
  function checkMinMax (number) {
    changeCntP(Math.max(min, Math.min(max, number)))
  }

  function decriment() {
    checkMinMax(curent-1);
  }

  function incriment() {
    checkMinMax(curent+1);
  }

  function handelBlur() {
    checkMinMax(curent)
  }
  
  return (
    <>
      <button onClick={decriment}>decriment</button>
      <input onBlur={handelBlur} value={curent} onChange={fillInput} />
      <button onClick={incriment}>incriment</button>
    </>
  );
}

export default Counter;
