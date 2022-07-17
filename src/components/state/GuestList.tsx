import { useState } from 'react';

export const GuestList: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);
  const handleClick = () => {
    setGuestName('');
    guestName.length > 1
      ? setGuests([...guests, guestName])
      : alert('Enter a name with more than 1 character');
  };
  return (
    <div>
      <h3>Guest list</h3>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
      />
      <button onClick={handleClick}>Add guest</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};
