import iconStar from "../assets/icon-star.svg";
const RatingState = (setMode, setStar, star) => {
  return (
    <main className="rating_state_initial">
      <div id="star-box">
        <img src={iconStar} alt="icon-star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (star != 0) setMode("FINAL");
        }}
      >
        <div className="box_button">
            <input:
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default RatingState;
