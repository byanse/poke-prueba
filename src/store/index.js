import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pokemons from './modules/pokemons';
import favorites from './modules/favorites';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    pokemons,
    favorites,
  },
  strict: debug,
  plugins: debug
    ? [createLogger(), createPersistedState()]
    : [createPersistedState()],
});
