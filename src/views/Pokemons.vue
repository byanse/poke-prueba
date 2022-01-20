<template>
  <div class="pokemons">
    <div id="pokemons-list">
      <h1>Lista de pokemones</h1>

      <div class="grid box py-3">
        <div
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          class="col-6 grid p-3"
        >
          <div class="col text-left">
            {{ pokemon.name }}
          </div>

          <Button
            label="Info"
            class="p-button-info"
            @click="selectPokemon(pokemon)"
          />
        </div>
      </div>

      <div class="grid mt-3 justify-content-between">
        <Button
          label="Anterior"
          class="p-button-outlined p-button-secondary mr-2"
          @click="getPreviousPage"
          v-if="Boolean(hasPreviousPage)"
        />
        <div v-if="!Boolean(hasPreviousPage)"></div>
        <Button
          label="Siguiente"
          class="p-button-secondary"
          @click="getNextPage"
          v-if="Boolean(hasNextPage)"
        />
      </div>
    </div>

    <div id="selected-pokemons-list" class="mt-5">
      <DataTable
        :value="selectedPokemons"
        :paginator="true"
        :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50]"
        responsiveLayout="scroll"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords}"
      >
        <Column header="Favorito">
          <template>
            <Button label="Agregar" class="p-button-primary" />
          </template>
        </Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="height" header="Alto"></Column>
        <Column field="weight" header="Ancho"></Column>
        <Column field="sprites.front_default" header="Imagen">
          <template #body="{ data }">
            <Image :src="data.sprites.front_default" />
          </template>
        </Column>
        <Column header="Eliminar">
          <template>
            <Button
              icon="pi pi-times"
              class="p-button-rounded p-button-danger"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const hasPreviousPage = computed(
      () => store.state.pokemons.currentPage.previous
    );

    const hasNextPage = computed(() => store.state.pokemons.currentPage.next);

    const pokemons = computed(() => store.state.pokemons.currentPage.results);

    const selectedPokemons = computed(
      () => store.state.pokemons.selectedPokemons
    );

    store.dispatch('pokemons/getFirstPage');

    return {
      pokemons,
      selectedPokemons,
      hasPreviousPage,
      hasNextPage,
      getNextPage() {
        if (hasNextPage.value) {
          store.dispatch('pokemons/getNextPage');
        }
      },
      getPreviousPage() {
        if (hasPreviousPage.value) {
          store.dispatch('pokemons/getPreviousPage');
        }
      },
      selectPokemon(pokemon) {
        store.dispatch('pokemons/selectPokemon', pokemon);
      },
    };
  },
};
</script>

<style scoped>
.pokemons {
  padding: 20px;
}

.box {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
