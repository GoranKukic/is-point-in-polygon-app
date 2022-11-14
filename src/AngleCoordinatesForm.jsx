function SecondForm({ x, y, onXChange, onYChange, id }) {
  return (
    <div className="angle-input">
      <form>
        <div className="angle-coordinates">
          <p>Angle {id + 1}</p>
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
          />
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
          />
        </div>
      </form>
    </div>
  );
}

export default SecondForm;
