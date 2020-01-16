import React, { useEffect, useState } from 'react';
import api from '../../services/axios';

import '../../styles/global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import Dev from '../../components/Dev';
import DevForm from '../../components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);
  const [devsLength, setDevsLength] = useState(0);

  async function handleSubmit(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  async function handleDelete(id) {
    await api.delete(`/devs/${id}`);

    const response = await api.get('/devs');
    setDevsLength(response.data.length);
  }

  useEffect(() => {
    async function LoadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
      setDevsLength(response.data.length);
    };

    LoadDevs();
  }, [devsLength])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <DevForm  onSubmit={handleSubmit} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <Dev key={dev._id} dev={dev} handleDelete={handleDelete} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
