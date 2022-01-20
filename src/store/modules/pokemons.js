import api from '@/services/api';

// initial state
const state = () => ({
  currentPage: {},
  selectedPokemons: [],
});

const getters = {};

const actions = {
  async getFirstPage({ commit, state }) {
    try {
      const { data } = await api.get('/pokemon', {
        params: { limit: 10 },
      });

      commit('setPage', data);
    } catch (error) {
      console.error('error', error);
      commit('setPage', state.currentPage);
    }
  },
  async getNextPage({ commit, state }) {
    try {
      const { data } = await api.get(state.currentPage.next);

      commit('setPage', data);
    } catch (error) {
      console.error('error', error);
      commit('setPage', state.currentPage);
    }
  },
  async getPreviousPage({ commit, state }) {
    try {
      const { data } = await api.get(state.currentPage.previous);

      commit('setPage', data);
    } catch (error) {
      console.error('error', error);
      commit('setPage', state.currentPage);
    }
  },
  async selectPokemon({ commit, state }, pokemon) {
    try {
      const { data } = await api.get(pokemon.url);

      const pokemonIsSelected = state.selectedPokemons.find(
        (p) => p.id === data.id
      );

      if (!pokemonIsSelected) {
        commit('addPokemonToSelected', data);
      }
    } catch (error) {
      console.error('error', error);
    }
  },
};

const mutations = {
  setPage(state, page) {
    state.currentPage = page;
  },
  addPokemonToSelected(state, pokemon) {
    state.selectedPokemons.push(pokemon);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
