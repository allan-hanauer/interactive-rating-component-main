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
        <main>
          <RatingState setMode={setMode} setStar={setStar} star={star} />
        </main>
        <Footer />
      </>
    );
  } else if (mode == "FINAL") {
    return (
      <>
        <main>
          <EndRatingState star={star} />
        </main>
        <Footer />
      </>
    );
  }
};

export default App;
