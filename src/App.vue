<template>
  <div id="app">
   <appnavbar></appnavbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "App",
  components: {
    appnavbar: navbar
  }
};
</script>

<style>
</style>
