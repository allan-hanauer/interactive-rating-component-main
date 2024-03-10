import final from "../assets/illustration-thank-you.svg";
const EndRatingState = ({ star }) => {
  return (
    <main className="rating_state_final">
      <img src={final} className="img-illu" alt="illustration" />
      <div className="box-select">You selected {star} out of 5</div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating.
        <br /> If you ever need more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
};

export default EndRatingState;
