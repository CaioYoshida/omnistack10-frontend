import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/axios';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Update({ match }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [username, setUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [bio, setBio] = useState('');
  const [avatar_url, setAvatar_url] = useState('');

  useEffect(() => {
    async function loadDev() {
      const response = await api.get(`devs/${match.params.id}`);

      setUsername(response.data.name);
      setTechs(response.data.techs.join(', '));
      setBio(response.data.bio);
      setLatitude(response.data.location.coordinates[1]);
      setLongitude(response.data.location.coordinates[0]);
      setAvatar_url(response.data.avatar_url);
    }
    loadDev();
  }, [match.params.id])

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`devs/${match.params.id}`, {
        name: username,
        bio,
        techs,
        latitude,
        longitude
      });

      toast.success('Perfil atulizado com sucesso');
    } catch(err) {
      toast.error('Erro no servidor');
    }
  }

  return (
    <main>
      <aside className="updateForm">
        <strong>Update Profile</strong>

        <div className="imgDiv">
          <img src={avatar_url} alt={username}/>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="username">Username</label>
            <input 
              name="username" 
              htmlFor="username" 
              required
              value={username}
              onChange={event => setUsername(event.target.value)}
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

          <div className="input-block">
            <label htmlFor="bio">Bio</label>
            <textarea 
              name="bio" 
              htmlFor="bio" 
              required
              value={bio}
              onChange={event => setBio(event.target.value)}
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
            Save
          </button>
          <Link to="/">
            Voltar
          </Link>
        </form>
      </aside>
    </main>
  );
}