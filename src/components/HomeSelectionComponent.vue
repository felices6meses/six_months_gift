<template>
  <div class="col-span-2 flex flex-col gap-[18px]">
    <div class="border border-borders gap-6 py-6 rounded-3xl flex flex-col">
      <p class="text-white/70 font-text text-lg text-center">En esta hermosa relacion, <br>
        ¿Cual de nosotros dos ama mas al otro?</p>
      <div id="selectionContainer" class="w-full flex justify-center gap-12">
        <button id="MauroBtn"
          class="bg-[url('correct-option.png')] w-24 h-24 rounded-full border-2 shadow-xl border-borders/50  active:border-pink-500 active:shadow-none active:border-4 transition-all duration-300" @click="triggerCorrectClick"
          ></button>
        <button id="cateBtn"
          class="bg-[url('wrong-option.png')] w-24 h-24 rounded-full border-2 shadow-xl border-borders/50  active:border-pink-500 active:shadow-none active:border-4 transition-all duration-300 disabled:border-slate-300/5 disabled:flex disabled:justify-center disabled:bg-none disabled:border-none disabled:shadow-none disabled:items-center text-accent" @click="triggerErrorClick"
          >
          <img v-if="isDisabled" src="/arrowIcon.svg" alt="Arrow Icon" class=" -rotate-90 w-10 h-10 text-accent">
        </button>
      </div>
    </div>
    <div id="errorContainer">
      <ErrorNotificationComponent />
      <SuccessNotificationComponent />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { notify } from "notiwind"
import JSConfetti from 'js-confetti'
import { useRouter } from 'vue-router';
import ErrorNotificationComponent from './ErrorNotificationComponent.vue';
import SuccessNotificationComponent from './SuccessNotificationComponent.vue';
const isDisabled = ref(false)
const clickErrorsCount = ref(0)
const router = useRouter()
const triggerErrorClick = () => {
  clickErrorsCount.value++
  switch (clickErrorsCount.value) {
    case 1:

      notify({
        group: 'error',
        title: "Uy parece que te equivocaste,Intenta de nuevo"
      }, 2500) //2.5s
      break;
    case 2:
      notify({
        group: 'error',
        title: "Ay tontita, otra vez? Dale, te doy una chance mas.."
      }, 2500) //2.5s
      break;
    case 3:

      notify({
        group: 'error',
        title: "Uy amorsito como te cuesta, dale de nuevo, es facil"
      }, 2500) //2.5s
      break;
    case 4:
      const cateBtn = document.getElementById('cateBtn')
      cateBtn.disabled = true
      isDisabled.value = true
      break;
  }
  if(cateBtn.disabled){
    notify({
        group: 'error',
        title: "Bueno mor ya esta, te la hago mas simple"
      }, 4000) //4s
  }
}

const triggerCorrectClick = () => {
  const mauroBtn = document.getElementById('MauroBtn')
  const jsConfetti = new JSConfetti({ mauroBtn})
  jsConfetti.addConfetti({
    emojis: ['🎉', '👑', '✨', '🍾',]
  })
  notify({
        group: 'exito',
        title: "POR FIN, gracias por entenderlo mi amor"
      }, 4000) //4s
  setTimeout(()=>{
    router.push('/our-history')
  },3000)
}
</script>
