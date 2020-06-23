<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DemoBlock from './components/DemoBlock'

export default {
  name: 'app',
  // components: {
  //   HelloWorld,
  //   DemoBlock
  // },
  data() {
    return {
      query: {
        user: ''
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/style';

// #app {
//   .body-wrapper {
//     margin: 0 auto;
//     width: 600px;
//     height: 300px;
//   }
// }
</style>
