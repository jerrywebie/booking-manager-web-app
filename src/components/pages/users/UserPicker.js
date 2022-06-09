import React, {useState, useEffect} from 'react';
import Spinner from '../../customComponents/Spinner';
//import data from '../../../data/static.json';

export default function UserPicker() {
  

  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {       
      const resp = await fetch("http://localhost:3001/users");      
      const data = await (resp.json());       
      setUsers(data); 
    };   
    getUsers(); 
  }, []);

  if (users === null) {
    return <Spinner/>
  }

  return (
    <select>    
      {users.map(u => (<option key={u.id}>{u.name}</option>))}   
    </select> 
  )
}
