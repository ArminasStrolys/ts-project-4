import { Parent } from '../props/Parent';
import { GuestList } from '../state/GuestList';
import UserSearch from '../state/UserSearch';

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      <Parent />
      <br />
      <GuestList />
      <br />
      <p>Search:</p>
      <UserSearch />
    </div>
  );
}

export default App;
