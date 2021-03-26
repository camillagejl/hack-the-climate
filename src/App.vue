<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  padding: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}

.button_container {
  width: 100%;
  text-align: right;
}

button {
  background-color: darkseagreen;
  padding: 16px;
  margin-bottom: 16px;
  margin-right: 0;
  width: 150px;
  border: none;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

h1 {
  margin-top: 34px;
}

//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
