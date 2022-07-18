import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Mark', age: 19 },
  { name: 'Matt', age: 24 },
  { name: 'Jessie', age: 28 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User search:
      <div>
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Find</button>
      </div>
      <br />
      <div>{user && <p>{user.name + ', ' + user.age}</p>}</div>
    </div>
  );
};

export default UserSearch;
