<template>
  <section id="app">
    <NavbarView />
    <FormView />
    <CardView />
  </section>
</template>

<script>
import NavbarView from"./components/NavbarView.vue";
import FormView from"./components/FormView.vue";
import CardView from"./components/CardView.vue";

export default {
 
  components: {
    NavbarView,
    FormView,
    CardView,
  }
}
</script>

<style>
#app {
  width:50%;
  margin: auto;
}
</style>
