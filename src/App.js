import "./App.css";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Player from "./components/Player";
import { useSelector } from "react-redux";

function App() {
  const tracks = useSelector((state) => state.recommendations);
  const currStep = useSelector((state) => state.currStep);

  return (
    <div className="App">
      <h1>Tracks recommendations</h1>
      {currStep === "Form1" ? <Form1 /> : null}
      {currStep === "Form2" ? <Form2 /> : null}
      {currStep === "Form3" ? <Form3 /> : null}
      {currStep === "tracks" && tracks ? <Player /> : null}
    </div>
  );
}

export default App;

//create playlist request
// function createPlaylist(e) {
//   e.preventDefault();
//   axios({
//     url: "https://api.spotify.com/v1/users/faltblatt/playlists",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//     data: {
//       public: false,
//     },
//   });
// }
