import {useState} from 'react';
import data from '../../../data/static.json';

export default function BookablesList () {
  const group = "Rooms";
  const bookablesInGroup = data.bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => setBookableIndex(i)}
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
