import RatingState from "./components/RatingState";
import Footer from "./components/Footer";
import { useState } from "react";
import EndRatingState from "./components/EndRatingState";
const App = () => {
  const [mode, setMode] = useState("INITIAL");
  const [star, setStar] = useState("");
  if (mode == "INITIAL") {
    return (
      <>
        <RatingState setMode={setMode} setStar={setStar} star={star} />

        <Footer />
      </>
    );
  } else if (mode == "FINAL") {
    return (
      <>
        <EndRatingState star={star} />
        <Footer />
      </>
    );
  }
};

export default App;
