// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? <Login setUser={setUser} /> : <Profile user={user} setUser={setUser} />}
    </div>
  );
};

export default App;
