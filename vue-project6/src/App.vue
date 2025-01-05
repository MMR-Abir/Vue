<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FoodItems from './components/FoodItems.vue';

</script>

<template>
  <header>
   

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/food">Food Item</RouterLink> |
        <RouterLink to="/fruits">Fruit Item</RouterLink> |
        <RouterLink to="/todo">ToDo List</RouterLink> |
        <RouterLink to="/ref">Ref Hook</RouterLink> |
        <RouterLink to="/lifecycle">Life Cycle</RouterLink> |
        <RouterLink to="/forminput">Form</RouterLink> |
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
