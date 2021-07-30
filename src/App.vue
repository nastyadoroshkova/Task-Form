<template>
  <div id="app" class="app">
    <Form/>
  </div>
</template>

<script>
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Form,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato');

  body {
    margin: 0;
    padding: 0;
    color: #333333;
    background-color: #1A1A1A;
    font-family: 'Lato', sans-serif;
  }
</style>
