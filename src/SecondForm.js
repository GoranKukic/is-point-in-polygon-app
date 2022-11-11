function SecondForm() {
  return (
    <div className="angle-input">
      <form>
        {/* <label>Enter X and Y coordinates for Polygon angles</label> */}
        <div className="angle-coordinates">
          <p>Angle</p>
          <input
            type="number"
            placeholder="x"
            id="nr-of-angles"
            name="nr-ofangles"
            required
          ></input>
          <input
            type="number"
            placeholder="y"
            id="nr-of-angles"
            name="nr-ofangles"
            required
          ></input>
        </div>

        {/* <button className="btn">Sumbit</button> */}
      </form>
    </div>
  );
}

export default SecondForm;
