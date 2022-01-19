<template>
  <div>
    <Toolbar>
      <template #start>
        <h1>API-Pokemón</h1>
      </template>

      <template #end>
        <router-link to="/"
          ><Button label="Inicio" class="p-button-link"
        /></router-link>
        <router-link to="/pokemones"
          ><Button label="Pokemones" class="p-button-link"
        /></router-link>
        <router-link to="/favoritos"
          ><Button label="Favoritos" class="p-button-link"
        /></router-link>
      </template>
    </Toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.p-toolbar {
  border: none;
  border-radius: 0;
}
</style>
