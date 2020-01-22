import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  .answer {
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 4px;
    background: white;
    width: 450px;
    height: auto;

    padding: 30px;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    color: #444;
    align-self: center;
  }

  p {
    align-self: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #111;
  }

  img {
    margin-top: 20px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    align-self: center;
  }

  #closeButton {
    border: none;
    background: none;
    align-self: flex-end;

    &:hover {
      background: ${darken(0.05, '#fff')};
    }
  }
`;

export const ConfirmButton = styled.button`
  height: 45px;
  width: 100%;
  margin-top: 20px;

  background: #77dd77;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: ${darken(0.05, '#77dd77')};
  }
`;

export const CancelButton = styled.button`
  height: 45px;
  width: 100%;
  margin-top: 20px;

  background: #ddd;
  border: none;
  border-radius: 4px;
  color: #777;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: ${darken(0.05, '#ddd')};
  }
`;
