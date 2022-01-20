// initial state
const state = () => ({
  pokemons: [],
});

const getters = {};

const actions = {
  async add({ commit, state }, pokemon) {
    const isPokemonAdded = state.pokemons.find((p) => p.id === pokemon.id);

    if (!isPokemonAdded) {
      commit('setPokemons', [...state.pokemons, pokemon]);
    }
  },
  async remove({ commit, state }, pokemon) {
    const filteredPokemons = state.pokemons.filter((p) => p.id !== pokemon.id);

    commit('setPokemons', filteredPokemons);
  },
};

const mutations = {
  setPokemons(state, pokemons) {
    state.pokemons = pokemons;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
