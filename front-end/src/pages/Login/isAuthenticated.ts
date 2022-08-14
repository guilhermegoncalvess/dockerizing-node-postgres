import axios from 'axios';

export const isAuthenticated = (history: any): void => {
  const storage = localStorage.getItem('@finances/authenticated');

  if (storage) {
    const { email, password } = JSON.parse(storage);

    axios
      .post('http://localhost:3334/user/login', { email, password })
      .then((response: any) => {
        if (response.status === 200) history.push('/dashboard');
      });
  } else history.push('/');
};
