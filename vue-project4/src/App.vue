<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from './components/FooterView.vue'
import HeaderView from './components/HeaderView.vue'
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <HeaderView/>
<RouterView/>
<FooterView/>
</template>

<style>

</style>
