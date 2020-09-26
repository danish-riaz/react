import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
    };
    fetchData();
    return () => {
      console.log('Cleaning....');
    };
  }, []);
  return (
    <div>
      {console.log('[User] Rendering')}
      {users.map((user) => (
        <p key={user.id} style={{ textAlign: 'left' }}>
          {user.name}
        </p>
      ))}
      <button onClick={() => setUsers([])}>Remove all Users</button>
    </div>
  );
};

export default User;
