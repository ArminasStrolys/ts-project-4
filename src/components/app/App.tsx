import { Parent } from "../props/Parent";
import { GuestList } from "../state/GuestList";

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      <Parent/>
      <br />
      <GuestList/>
    </div>
  );
}

export default App;
