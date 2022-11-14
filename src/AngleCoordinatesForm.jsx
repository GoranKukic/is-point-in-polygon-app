function SecondForm({ x, y, onXChange, onYChange } ) {
  // const [input, setInput] = useState(props?.value ?? '');

  return (
    <div className="angle-input">
      <form>
        {/* <label>Enter X and Y coordinates for Polygon angles</label> */}
        <div className="angle-coordinates">
          <p>Angle</p>
          <input
            type="number"
            min="0"
            max="500"
            placeholder="x"
            className="xPolygon"
            name="nr-ofangles"
            value={x}
            onChange={onXChange}
            required
          ></input>
          <input
            type="number"
            min="0"
            max="400"
            placeholder="y"
            className="yPolygon"
            name="nr-ofangles"
            value={y}
            onChange={onYChange}
            required
          ></input>
        </div>
      </form>
    </div>
  );
}

export default SecondForm;
