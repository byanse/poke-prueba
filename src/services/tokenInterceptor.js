import api from './api';

const setup = (store) => {
  api.interceptors.request.use(
    (config) => {
      // actualmente el modulo auth no existe, por lo que dará error si se quita el signo de interrogación
      const accessToken = store.state.auth?.accessToken;

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default setup;
