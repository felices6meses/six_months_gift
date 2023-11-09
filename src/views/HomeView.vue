<script setup>
import titleComponent from '../components/titleComponent.vue'
import mainLayout from '../layouts/mainLayout.vue';
import HomeSelectionComponent from '../components/HomeSelectionComponent.vue'
</script>

<template>
  <mainLayout>
    <div class="col-span-2 flex flex-col justify-center gap-[18px] mt-16">
      <titleComponent content="Feliz 6  meses mi amor" class="text-5xl text-center" />
      <p class="text-center text-lg font-text text-white/70">Antes de recorrer nuestra historia primero debes responder
        con la verdad una simple pregunta</p>
    </div>
    <div class="col-span-2 py-8">
      <HomeSelectionComponent/>
    </div>
  </mainLayout>
</template>
