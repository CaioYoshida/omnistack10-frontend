import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import './styles.css';

export default function Dev({ dev, handleDelete, history }) {

  async function remove(id) {
    handleDelete(id);
  }

  async function update(id) {
    console.log(id);

    history.push('/updatedevs');
  }

  return (
    <li className="dev-item">
      <header>
        <div className="dev">
          <img src={dev.avatar_url} alt={dev.login}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </div>
        <div className="dev-options">
          <button className="options">
            <MdEdit size={20} color="#777" onClick={() => update(dev._id)}/>
          </button>
          <button className="options" onClick={() => remove(dev._id)}>
            <MdDelete size={20} color="#777" />
          </button>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Access Github profile</a>
    </li>
  );
}
