<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>



<template>
    <div class="profile">User Profile Content Goes Here</div>
    <h1>This is a profile page:  {{ route.params.username }}</h1>
</template>
<style></style>
