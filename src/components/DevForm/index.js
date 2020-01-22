import React, { useState, useEffect } from 'react';

import { LoadingIcon } from './styles';

export default function DevForm({ onSubmit, loading }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithub_username('');
    setTechs('');
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Github User</label>
        <input 
          name="github_username" 
          htmlFor="github_username" 
          required
          value={github_username}
          onChange={event => setGithub_username(event.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Technologies</label>
        <input 
          name="techs" 
          htmlFor="techs" 
          required
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            type="number" 
            name="latitude" 
            htmlFor="latitude" 
            required 
            value={latitude}
            onChange={event => setLatitude(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            type="number" 
            name="longitude" 
            htmlFor="longitude" 
            required value={longitude}
            onChange={event => setLongitude(event.target.value)}
          />
        </div>
      </div>

      <button type="submit">
        {loading ? <LoadingIcon size={16}/> : 'save'}
      </button>
    </form>
  );
}
