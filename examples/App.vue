<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="body-wrapper">
      <demo-block></demo-block>
      <t-query-panel class="query-panel" border>
        <template v-slot:querybar>
          <el-form-item label="审批人">
            <el-input v-model="query.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </template>
        (●'◡'●)
      </t-query-panel>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DemoBlock from './components/DemoBlock'

export default {
  name: 'app',
  components: {
    HelloWorld,
    DemoBlock
  },
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
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .body-wrapper {
    margin: 0 auto;
    width: 600px;
    height: 300px;
  }
}
</style>
