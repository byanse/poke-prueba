<template>
  <div class="favorites">
    <div id="pokemons-list">
      <h1>Tus favoritos</h1>

      <div class="grid box py-3">
        <div
          v-for="pokemon in favoritesPokemons"
          :key="pokemon.id"
          class="col-6 grid p-3"
        >
          <PokemonCard :pokemon="pokemon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import PokemonCard from '@/components/PokemonCard.vue';

export default {
  setup() {
    const store = useStore();

    const favoritesPokemons = computed(() => store.state.favorites.pokemons);

    return {
      favoritesPokemons,
    };
  },
  components: {
    PokemonCard,
  },
};
</script>

<style scoped>
.favorites {
  padding: 20px;
}
</style>
