<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <main class="w-screen h-full min-h-screen  bg-principal ">
    <div class="h-full w-full z-30 relative ">
      <RouterView />
    </div>
    <div :class="{ 'h-[930vh]' : $route.path.startsWith('/our'), 'h-screen' : !$route.path.startsWith('/our')}" class="absolute top-0 w-full  min-h-screen bg-blurred-pattern opacity-8 z-10">
    </div>
  </main>
</template>
