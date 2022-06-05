import React from 'react';
import data from '../../../data/static.json';

export default function UserPicker() {
  return (
    <select>    
      {data.users.map(u => (<option key={u.id}>{u.name}</option>))}   
    </select> 
  )
}
