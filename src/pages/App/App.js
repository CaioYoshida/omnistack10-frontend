import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/axios';

import '../../styles/global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import Dev from '../../components/Dev';
import DevForm from '../../components/DevForm';

function App({ history }) {
  const [loading, setLoading] = useState(false);
  const [devs, setDevs] = useState([]);
  const [devsLength, setDevsLength] = useState(0);

  async function handleSubmit(data) {
    setLoading(true);

    const response = await api.post('/devs', data);

    setLoading(false);
    setDevs([...devs, response.data]);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/devs/${id}`);

      const response = await api.get('/devs');
      setDevsLength(response.data.length);

      toast.success('Dev removido com sucesso');
    } catch(err) {
      toast.error('Erro no servidor');
    }
    
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

        <DevForm  onSubmit={handleSubmit} loading={loading}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <Dev 
              key={dev._id} 
              dev={dev} 
              handleDelete={handleDelete}
              history={history}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
