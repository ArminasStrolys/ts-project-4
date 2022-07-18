import { Parent } from '../props/Parent';
import { GuestList } from '../state/GuestList';
// import UserSearch from '../state/UserSearch';
import UserSearch from '../refs/UserSearch';
import EventComponents from '../events/EventComponents';

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
      <EventComponents />
    </div>
  );
}

export default App;
