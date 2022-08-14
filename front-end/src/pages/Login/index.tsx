import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setFailed] = useState(false);

  const history = useHistory();

  function login(): void {
    setFailed(false);
    axios
      .post('http://localhost:3334/user/login', {
        email,
        password,
      })
      .then((response: any) => {
        if (response.status === 200) {
          localStorage.setItem(
            '@finances/authenticated',
            JSON.stringify(response.data),
          );
          history.push('/dashboard');
        } else setFailed(true);
      });
  }
  return (
    <S.Container>
      <S.Card>
        <div>
          <S.Title>Bem Vindo</S.Title>
        </div>

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: 'white ' }}>Email</span>
          <input onChange={(e) => setEmail(e.target.value)} />

          <span style={{ color: 'white ' }}>Password</span>
          <input onChange={(e) => setPassword(e.target.value)} />
        </div>
        <S.Button type="submit" onClick={login}>
          login
        </S.Button>
      </S.Card>
    </S.Container>
  );
};

export default Login;
