import React from 'react';

import './styles.css';

export default function Dev({dev}) {
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
            U
          </button>
          <button className="options">
            D
          </button>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Access Github profile</a>
    </li>
  );
}
