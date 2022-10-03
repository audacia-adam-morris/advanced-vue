<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>



<template>
    <div class="blogPost">Blog post content goes here</div>
    <h1>This is a profile page:  {{ route.params.blogPostName }}</h1>
</template>
<style></style>
