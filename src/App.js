// Author : Nemuel Wainaina

import React, { useState, useRef } from 'react';

function App() {
  const [triangletype, setTriangleType] = useState('None');

  const first = useRef(0);
  const second = useRef(0);
  const third = useRef(0);

  const classify = (e) => {
    e.preventDefault();
    setTriangleType('None');

    const sd1 = parseInt(first.current.value);
    const sd2 = parseInt(second.current.value);
    const sd3 = parseInt(third.current.value);

    if(sd1 <= 0 || sd2 <= 0 || sd3 <= 0) {
      setTriangleType('None');
      return;
    }

    if(sd1 == sd2 && sd2 == sd3) {
      setTriangleType('Equilateral');
    } else if((sd1 == sd2) || (sd1 == sd3) || (sd2 == sd3)) {
      setTriangleType('Isosceles');
    } else {
      if(sd1 > sd2 && sd1 > sd3) {
        if(((sd2 * sd2) + (sd3 * sd3)) == (sd1 * sd1)) {
          setTriangleType('Right-angled');
        } else {
          setTriangleType('Scalene');
        }
      } else if(sd2 > sd1 && sd2 > sd3) {
        if(((sd1 * sd1) + (sd3 * sd3)) == (sd2 * sd2)) {
          setTriangleType('Right-angled');
        } else {
          setTriangleType('Scalene');
        }
      } else if(sd3 > sd1 && sd3 > sd2) {
        if(((sd1 * sd1) + (sd2 * sd2)) == (sd3 * sd3)) {
          setTriangleType('Right-angled');
        } else {
          setTriangleType('Scalene');
        }
      }
    }

    // first.current.value = null;
    // second.current.value = null;
    // third.current.value = null;
  }

  return (
    <div className="App">
      <div className='title'>
        <h2>Triangle Classifier</h2>
      </div>
      <div className='form-container'>
        <form onSubmit={classify}>
          <input type="number" ref={first} placeholder='First side ...' required />
          <br />
          <br />
          <input type="number" ref={second} placeholder='Second side ...' required />
          <br />
          <br />
          <input type="number" ref={third} placeholder='Third side ...' required />
          <br />
          <br />
          <input type="submit" className="btn" value="Classify" />
          <br />
          <br />
        </form>
      </div>
      <div className='result'>
        <h2>Type : {triangletype}</h2>
      </div>
    </div>
  );
}

export default App;
