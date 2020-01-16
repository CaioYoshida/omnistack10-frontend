import React, { useEffect, useState } from 'react';
import api from './services/axios';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import Dev from './components/Dev';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  async function handleSubmit(data) {
    const response = await api.post('/devs', data)

    console.log(data);

    setDevs([...devs, response.data]);
  }


  useEffect(() => {
    async function LoadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    };

    LoadDevs();
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <DevForm  onSubmit={handleSubmit} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <Dev key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
