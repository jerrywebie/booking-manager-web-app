import React, {useState} from 'react';
import data from '../../../data/static.json';


export default function UserList() {
    const [userIndex, setUserIndex] = useState(0);
    const user = data.users[userIndex];
  return (
    <>
      <ul className="users items-list-nav">
        {data.users.map((u, i) => (
          <li key={u.id} className={i === userIndex ? "selected" : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>{u.name}</button>
          </li>
        ))}
      </ul>
      {user && (
        <div className="item user">
          <div className="item-header">
            <h2>{user.name}</h2>
          </div>
          <div className="user-details">
            <h3>{user.title}</h3>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </>
  );
}

