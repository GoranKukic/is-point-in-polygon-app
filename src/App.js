import { useRef, useState } from 'react';
import AngleCoordinatesForm from './AngleCoordinatesForm';
import Canvas from './CanvasHook';

function App() {
  const inputRef = useRef(null);
  // const inputRefPointX = useRef(null);
  // const inputRefPointY = useRef(null);

  const [fieldsCount, setFieldsCount] = useState(0);
  let [result, setResult] = useState('');

  const [xPolygonInput, setXInput] = useState(0);
  const [yPolygonInput, setYInput] = useState(0);

  const [xPointInput, setPointXInput] = useState(0);
  const [yPointInput, setPointYInput] = useState(0);

  //  vvvvvv Canvas vvvvvv

  // Angle point coordinates
  var anglePoints = [
    { x: 50, y: 10 },
    { x: 370, y: 150 },
    { x: 110, y: 220 },
    { x: 180, y: 170 },
    { x: 150, y: 370 },
  ];

  // FINAL FUNCTION

  var pointCoordinates = [Number(xPointInput), Number(yPointInput)];
  var polygonCoordinates = [
    [50, 10],
    [370, 150],
    [110, 220],
    [180, 170],
    [150, 370],
  ];
  var check = () => {
    let n = polygonCoordinates.length; // number of polygon points (angles)
    let count = 0; // number of intersections
    let x = pointCoordinates[0]; // x coordinate of point
    let y = pointCoordinates[1]; // y coordinate of point

    console.log(polygonCoordinates.length);

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
    console.log(count);
    // if our count is odd number point is inside of polygon, else is outside

    if (count % 2 === 0) {
      result = 'YES';
    } else {
      result = 'NOPE';
    }

    console.log(result);

    return count % 2 === 0 ? false : true;
  };

  var items = [];

  let angleCoordinates = document.getElementsByClassName('.angle-coordinates');
  // var xPolygon = document.getElementsByClassName('.xPolygon');
  // var yPolygon = document.getElementsByClassName('.yPolygon');

  console.log(angleCoordinates);

  let create = () => {
    console.log(xPolygonInput, yPolygonInput);
    items.push(
      angleCoordinates.map(() => {
        return {
          x: { xPolygonInput },
          y: { yPolygonInput },
        };
      })
    );
    console.log(items);
  };

  //Draw function

  const draw = (ctx) => {
    // Polygon
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'white';

    if (anglePoints.length > 0) {
      ctx.beginPath();
      let point = anglePoints[0];
      ctx.moveTo(point.x, point.y); // point 1
      for (let i = 1; i < anglePoints.length; ++i) {
        point = anglePoints[i];
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
          Submit
        </button>
      </div>
      <div className="coordinates">
        <div className="coordinates-wrap">
          <div className="angle-wrapper">
            <p>Angle Coordinates</p>
            <div className="angle-inner">
              {Array(parseInt(fieldsCount))
                .fill()
                .map((i, index) => (
                  <AngleCoordinatesForm
                    id={index}
                    key={index}
                    xPolygonInput={xPolygonInput}
                    yPolygonInput={yPolygonInput}
                    setXInput={setXInput}
                    setYInput={setYInput}
                  >
                    {/* <p>{`Angle + ${index + 1}`}</p> */}
                  </AngleCoordinatesForm>
                ))}
            </div>
            <button onClick={create} className="btn">
              Create polygon
            </button>
          </div>
          <div className="point-wrapper">
            <div className="point-coordinates">
              <label>Point Coordinates</label>
              <input
                type="number"
                min="0"
                max="500"
                // placeholder="x"
                id="nr-of-angles-x"
                name="nr-ofangles-x"
                // ref={inputRefPointX}
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
                // ref={inputRefPointY}
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
