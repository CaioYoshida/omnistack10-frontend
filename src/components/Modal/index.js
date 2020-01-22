import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/axios';

import { MdClose } from 'react-icons/md';

import { Container, ConfirmButton, CancelButton } from './styles';

export default function AnswerBox({ handleCloseModal, handleDelete, userId }) {
  const [avatar_url, setAvatar_url] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function loadDev() {
      const response = await api.get(`devs/${userId}`);

      setAvatar_url(response.data.avatar_url);
      setUsername(response.data.name);
    }
    loadDev();
  }, [userId]);

  return (
    <Container>
      <div className="answer">
        <button
          type="button"
          id="closeButton"
          title="Fechar"
          onClick={handleCloseModal}
        >
          <MdClose size={20} color="#000" />
        </button>
        <span className="title">DESEJA REALMENTE EXCLUIR DEV?</span>
        <img src={avatar_url} alt={username}/>
        <p>{username}</p>
        <ConfirmButton type="button" onClick={() => handleDelete(userId)}>
          Confirmar
        </ConfirmButton>
        <CancelButton type="button" onClick={handleCloseModal}>
          Voltar
        </CancelButton>
      </div>
    </Container>
  );
}

AnswerBox.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  helpOrderId: PropTypes.string.isRequired,
};
