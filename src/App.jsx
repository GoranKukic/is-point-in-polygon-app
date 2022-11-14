import { useRef, useState } from 'react';
import AngleCoordinatesForm from './AngleCoordinatesForm';
import Canvas from './CanvasHook';

function App() {
  const inputRef = useRef(null);
  const [positions, setPositions] = useState([]);
  let [result, setResult] = useState('');
  const [xPointInput, setPointXInput] = useState(0);
  const [yPointInput, setPointYInput] = useState(0);

  //var result;

  // const [xPolygonInput, setXInput] = useState(0);
  // const [yPolygonInput, setYInput] = useState(0);

  //  vvvvvv Canvas vvvvvv

  //function for creating input fields for Polygon angle points
  const handleCreatePositions = () => {
    const pos = Array.from(
      { length: parseInt(inputRef.current.value, 10) },
      () => ({ x: 0, y: 0 })
    );
    setPositions(pos);
  };

  // global variable where Polygon angle positions will be stored
  var newPositions;

  // function for handling data from input fields of Polygon angle points,
  // and storing it in array of objects co canvas can use them to draw
  const handleOnInputChange = (e, index, axis) => {
    setPositions((prevPositions) => {
      newPositions = [...prevPositions];
      newPositions[index] = {
        ...newPositions[index],
        [axis]: e.target.value,
      };
      return newPositions;
    });
  };

  //coordinates of point
  var pointCoordinates = [Number(xPointInput), Number(yPointInput)];

  //Draw function

  const draw = (ctx) => {
    // Polygon
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'white';

    if (positions.length > 0) {
      ctx.beginPath();
      let point = positions[0];
      ctx.moveTo(point.x, point.y); // point 1
      for (let i = 1; i < positions.length; ++i) {
        point = positions[i];
        ctx.lineTo(point.x, point.y); // point from 2 up to (points.length - 1)
      }
      ctx.closePath(); // go back to point 1
    }
    ctx.fill();

    // Point
    ctx.beginPath();
    ctx.arc(pointCoordinates[0], pointCoordinates[1], 1, 0, 2 * Math.PI, true);
    ctx.stroke();
  };

  //  ^^^^^^ Canvas ^^^^^^

  // FINAL FUNCTION
  var check = () => {
    // coordinates of polygon angles converted to simple array instead array of objects
    var polygonCoordinates = positions.map(({ x, y }) => [
      Number(x),
      Number(y),
    ]);
    //console.log('polygonCoordinates multi array: ', polygonCoordinates);

    let n = polygonCoordinates.length; // number of polygon points (angles)
    let count = 0; // number of intersections
    let x = pointCoordinates[0]; // x coordinate of point
    let y = pointCoordinates[1]; // y coordinate of point

    //console.log('Polygon cooridinates length', polygonCoordinates.length);

    for (let i = 0; i < n - 1; i++) {
      //looping thrught each side of polygon
      let side = {
        // side is made of two points
        a: {
          x: polygonCoordinates[i][0],
          y: polygonCoordinates[i][1],
        },
        b: {
          x: polygonCoordinates[i + 1][0],
          y: polygonCoordinates[i + 1][1],
        },
      };
      let x1 = side.a.x,
        x2 = side.b.x,
        y1 = side.a.y,
        y2 = side.b.y;
      // if point is bewteen a and be in verical axis
      // and is less than intersection point in orizontal axis
      // eslint-disable-next-line
      if (y < y1 !== y < y2 && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) {
        // then we can count it as intersection
        count += 1;
      }
    }
    //console.log("This is number of intersections", count);
    // if our count is odd number point is inside of polygon, else is outside

    if (count % 2 === 0) {
      result = 'No, Point is outside of Polygon';
    } else {
      result = 'Yes, Point is inside of Polygon';
    }

    setResult(result);

    console.log(result);

    return count % 2 === 0 ? false : true;
  };

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
        <button className="btn" onClick={handleCreatePositions}>
          Submit
        </button>
      </div>
      <div className="coordinates">
        <div className="coordinates-wrap">
          <div className="angle-wrapper">
            <p>Angle Coordinates</p>
            <div className="angle-inner">
              {positions.map((position, index) => (
                <AngleCoordinatesForm
                  id={index}
                  key={index}
                  x={position.x}
                  y={position.y}
                  onXChange={(e) => handleOnInputChange(e, index, 'x')}
                  onYChange={(e) => handleOnInputChange(e, index, 'y')}
                  className="second-form"
                >
                  <p>Group {index + 1}</p>
                </AngleCoordinatesForm>
              ))}
            </div>
            {/* <button
              onClick={() => console.log('Plygon positions:', positions)}
              className="btn"
            >
              Console log Polygon positions
            </button> */}
          </div>
          <div className="point-wrapper">
            <div className="point-coordinates">
              <label>Point Coordinates</label>
              <input
                type="number"
                min="0"
                max="500"
                id="nr-of-angles-x"
                name="nr-ofangles-x"
                value={xPointInput}
                onChange={(e) => setPointXInput(e.target.value)}
              ></input>
              <input
                type="number"
                min="0"
                max="400"
                placeholder="y"
                id="nr-of-angles-y"
                name="nr-ofangles-y"
                value={yPointInput}
                onChange={(e) => setPointYInput(e.target.value)}
              ></input>
            </div>
          </div>
        </div>

        <div className="btn-wrapper">
          <button onClick={check} className="btn">
            Check is point inide or not
          </button>
        </div>
      </div>
      <h1>{result}</h1>
      <div className="canvas-wrapper">
        <Canvas draw={draw} />
      </div>
    </div>
  );
}

export default App;
