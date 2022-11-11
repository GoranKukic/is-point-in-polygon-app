import { useRef, useState } from 'react';
import SecondForm from './SecondForm';

function App() {
  const inputRef = useRef(null);
  const [fieldsCount, setFieldsCount] = useState(0);

  return (
    <div className="app">
      <h1>Check is point inide of polygon or not</h1>
      <div className="start-form">
        <p>Select number from 3 to 10 for number of Polygon angles</p>
        <input
          type="number"
          id="nr-of-angles"
          name="nr-ofangles"
          min="3"
          max="10"
          required
          ref={inputRef}
        ></input>
        <button
          className="btn"
          onClick={() => setFieldsCount(inputRef.current.value)}
        >
          Sumbit
        </button>
      </div>
      <div className="coordinates">
        <div className="coordinates-wrap">
          <div className="angle-wrapper">
            <p>Angle Coordinates</p>
            <div className="angle-inner">
              {Array(parseInt(fieldsCount))
                .fill()
                .map((x, index) => (
                  <SecondForm id={index} key={index}>
                    <p>HI</p>
                  </SecondForm>
                ))}
            </div>
          </div>
          <div className="point-wrapper">
            <div className="point-coordinates">
              <label>Point Coordinates</label>
              <input
                type="number"
                placeholder="x"
                id="nr-of-angles"
                name="nr-ofangles"
              ></input>
              <input
                type="number"
                placeholder="y"
                id="nr-of-angles"
                name="nr-ofangles"
              ></input>
            </div>
          </div>
        </div>

        <div className="btn-wrapper">
          <button className="btn">Check is point inide or not</button>
        </div>
      </div>
    </div>
  );
}

export default App;
