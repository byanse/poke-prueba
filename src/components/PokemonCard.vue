<template>
  <Card style="width: 100%">
    <template #header>
      <Image :src="pokemon.sprites.front_default" width="150" preview />
    </template>
    <template #title>
      {{ pokemon.name }}
    </template>
    <template #footer>
      <Button
        icon="pi pi-times"
        label="Eliminar"
        class="p-button-danger"
        @click="removeFromFavorites(pokemon)"
      />
    </template>
  </Card>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    return {
      removeFromFavorites(pokemon) {
        store.dispatch('favorites/remove', pokemon);
      },
    };
  },
};
</script>

<style>
.p-card .p-card-content {
  padding: 0;
}
</style>
