<template>
  <div class="home">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <InputWSuggestions/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import InputWSuggestions from "@/components/InputWSuggestions";
export default {
  name: 'Home',
  components: {InputWSuggestions}
}
</script>
