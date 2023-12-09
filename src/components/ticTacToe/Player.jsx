import { useState } from 'react';
import './Player.css';

export default function Player({ initialName, symbol }) {
  // name change state
  const [ playerName, setPlayerName ] = useState(initialName);
  // edit button state
  const [ isEditing, setIsEditing ] = useState(false);

  // two way binding: get value from input, target the element itself and change the value {playerName}
  const handleChange = (event) => {
    console.log(event);
    setPlayerName(event.target.value)
  }

  const handleEditClick = () => {
    // invert the boolean value with function to avoid the same scheduled state
    setIsEditing(editing => !editing);
  }

  // set initial name
  let editablePlayerName = <span className="player-name padding-xxs">{playerName}</span>;

  // set the input if edit is clicked
  if (isEditing) {
    editablePlayerName = <input className="player-name padding-xxs" type="text" required value={playerName} onChange={handleChange} />
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button className="edit-player-name padding-xs" onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}