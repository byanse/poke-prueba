import { createStore, createLogger } from 'vuex';
import pokemons from './modules/pokemons';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    pokemons,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
