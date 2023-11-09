<template>
  <mainLayout>
    <!-- Thanks for give me happiness section -->
    <section class="col-span-2 min-h-screen flex flex-col gap-8 overflow-x-hidden">
      <div class="flex flex-col gap-4">
        <titleComponent  content="Gracias por hacerme tan feliz" class="text-4xl " />
        <p v-motion  class="font-text text-white/70 text-lg">Ya llevamos 6 meses de que esto se volvio oficial, desde que me dijiste
          que si, pero vos y yo sabemos que esto lleva un poquito mas</p>
      </div>
      <div  class="w-full flex flex-col gap-2">
        <img src="/images/first-pic-together.png" alt="first-pic-together"
          class="rounded-3xl border-borders w-full h-auto scale-110">
        <p class="font-text text-sm text-white/70 relative -top-2 left-6">Nuestra primera foto juntos</p>
      </div>
    </section>
    <!-- Thanks for feelings section -->
    <section class="col-span-2 flex flex-col min-h-screen h-full gap-8 overflow-x-hidden overflow-y-hidden">
      <titleComponent content="Gracias por todo lo que me haces sentir" class="text-4xl " v-motion
        :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1000 } }" />
      <div class="w-full flex flex-col gap-5">
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1100 } }"
          class="font-text text-white/70 text-lg">Todavia no olvido lo impactado que quede el momento en el que me di
          cuenta de que habia aceptado hacer un tik tok con vos, siendo tan hater de los tik toks. Al mismo tiempo, verme
          morirme de ganas de ver a alguien por aunque sea un ratito sin importar en las coniciones que yo estuviera,
          porque me querias ver aunque estuviera echo un desastre jajaja</p>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1200 } }"
          class="font-text text-white/70 text-lg">SIgo sin saber en que momento me enamoraste, pero no me olvido lo bobo
          que fui al no saber ponerle nombre a lo que me hizo sentir ver esta foto cuando me la mandaste.</p>
      </div>
      <div class="w-full flex">
        <img v-motion :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 1300 } }" src="/images/first-pic-recived.jpeg"
          alt="first-pic-recived" class="rounded-3xl border border-borders w-1/2 h-[350px] object-cover">
        <div class="flex px-4 flex-col pt-16">
          <p v-motion :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 1300 } }"
            class="font-text text-white/70 text-lg text-center">Suena estupido pero mi cabeza no dejaba de decir <span
              class="text-white">“dios mio que obra de arte que es esta mujerrr”</span></p>
        </div>
      </div>
    </section>
    <!-- Because with you section -->
    <section class="col-span-2 flex flex-col min-h-screen gap-4 overflow-x-hidden overflow-y-hidden pt-16">
      <div class="w-full flex flex-col gap-5">
        <titleComponent content="Porque con vos entendi lo que era compartir" v-motion :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 1000 } }" class="text-4xl " />
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1100 } }"
          class="font-text text-white/70 text-lg">Lo que era compartir un deseo en comun, un sentimiento incomprendido por
          ambas partes pero sostenido como si fuese la ultima fuerza sobre la tierra. Desde el inicio me diste vuelta el
          mundo, solo me di cuenta tarde. </p>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1200 } }"
          class="font-text text-white/70 text-lg">Desde la confianza que me hiciste sentir de entrada ,hasta la paz que me
          da abrazarte. </p>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1300 } }"
          class="font-text text-white/70 text-lg">Porque quiero que la vida nos encuentre siempre asi...</p>
      </div>
      <div
        class="flex w-full gap-[18px]">
        <div id="pics_col_1" class="w-1/2 flex flex-col gap-[18px]" >
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }"  src="/images/col_1_pos_1.jpg" alt="first-pic-recived"
            class="rounded-3xl border border-borders w-full h-[280px] object-cover">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_1_pos_2.jpg" alt="first-pic-recived"
            class="rounded-3xl border border-borders w-full h-[223px] object-cover">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_1_pos_3.png" alt="first-pic-recived"
            class="rounded-3xl border border-borders w-full object-cover ">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_1_pos_4.png" alt="first-pic-recived"
            class="rounded-3xl border border-borders w-full object-cover">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_1_pos_5.png" alt="first-pic-recived"
            class="rounded-3xl border border-borders w-full object-cover">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/foto_so_cute.jpeg" alt="first-pic-recived"
            class="rounded-3xl border border-borders w-full object-cover">
        </div>
        <div id="pics_col_2" class="w-1/2 flex flex-col gap-[18px] pt-10">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_2_pos_1.jpg" alt="first-pic-recived" class="rounded-3xl border border-borders">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_2_pos_2.jpg" alt="first-pic-recived"
            class="rounded-3xl border border-borders h-[320px] object-cover">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_2_pos_3.png" alt="first-pic-recived" class="rounded-3xl border border-borders">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_2_pos_4.png" alt="first-pic-recived" class="rounded-3xl border border-borders">
          <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/col_2_pos_5.png" alt="first-pic-recived" class="rounded-3xl border border-borders">
          <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" class="w-full py-8 px-2 bg-principal/70 border border-borders rounded-3xl h-full flex flex-col gap-2">
            <p class="font-text text-xl text-pink-200 ">Te amo mas,mi compañera de vida</p>
            <p class="font-text text-lg text-pink-200/70 ">Estos son algunos de los tantos hermosos momentos que vivimos
              juntos. faltan muchos mas. </p>
          </div>
        </div>
      </div>
      <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" src="/images/juntos_collage.jpg" alt="first-pic-together"
        class="rounded-3xl border border-borders w-full h-auto">
    </section>
    <!-- Because together -->
    <section class="col-span-2 flex flex-col min-h-screen gap-4 overflow-x-hidden overflow-y-hidden pt-16">
      <titleComponent content="Porque juntos..." class="text-4xl text-center" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1000} }"/>
      <div class="flex flex-col gap-5">
        <div v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1000} }" class="card bg-principal px-4 flex flex-col gap-[18px] py-2 rounded-[22px]">
          <img src="/images/card_1.jpg" alt="" class="rounded-xl w-full h-[90%] object-cover">
          <div class="flex flex-col justify-center">
            <p class="font-text text-2xl text-center text-white/80">...Le sacamos la lengua a los problemas</p>
          </div>
        </div>
        <!-- Card 2 -->
        <div v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1000} }" class="card bg-principal px-4 flex flex-col gap-[18px] py-2 rounded-[22px]">
          <img src="/images/card_2.jpg" alt="" class="rounded-xl w-full h-[90%] object-cover">
          <div class="flex flex-col justify-center pb-2">
            <p class="font-text text-2xl text-center text-white/80">...Le ponemos cara sensual a la vida </p>
          </div>
        </div>
        <!-- Card 3 -->
        <div v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1000} }" class="card bg-principal px-4 flex flex-col gap-[18px] py-2 rounded-[22px]">
          <img src="/images/card_3.png" alt="" class="rounded-xl w-full h-[90%] object-cover">
          <div class="flex flex-col justify-center pb-2">
            <p class="font-text text-2xl text-center text-white/80">...todo es mas lindo</p>
          </div>
        </div>
      </div>
    </section>
    <!-- We are a team -->
    <section class="col-span-2 flex flex-col min-h-screen gap-4 overflow-x-hidden overflow-y-hidden pt-16">
      <div class="flex flex-col gap-[18px]">
        <titleComponent content="Porque ahora somos un equipo" class="text-4xl" v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1000 } }"/>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1000 } }" class="font-text text-white/70 text-lg">Sos mi compañera de vida, mucho mas que mi novia, sos todo lo que
          quiero hoy y mañana. Sos la persona con la que estoy dispuesto a formar un futuro y vivir cada dia que me quede.
        </p>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1100 } }" class="font-text text-white/70 text-lg">No te prometo que todo va a ser perfecto y color de rosas</p>
      </div>
      <div class="flex flex-col">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1300 } }" class="flex gap-6 px-4">
          <img src="/images/foto_semsual.jpg" alt="foto_semsual" class="border border-borders w-36 h-52 rounded-3xl">
          <div class="flex flex-col justify-center">
            <p class="font-text text-white/70 text-lg">Hay dias que me va a tocar a mi...</p>
          </div>
        </div>
        <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1300 } }" class="flex gap-6 px-4 relative bottom-8">
          <div class="flex flex-col justify-center">
            <p class="font-text text-white/70 text-lg">Y dias que te va a tocar a vos...</p>
          </div>
          <img src="/images/foto_semsual_2.jpg" alt="foto_semsual_2" class="border border-borders w-36 h-52 rounded-3xl">
        </div>
        <p v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 500 } }" class="font-text text-white/70 text-lg">Pero hay algo que si te puedo prometer, y es que sea lo que sea que la
          vida nos quiera poner en frente, nos va a encontrar juntos.</p>
      </div>
    <div class="py-4 flex flex-col gap-5">
      <titleComponent v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1000 } }" content="No lo olvides, esto recien empieza..." class="text-4xl" />
      <img v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1100 } }" src="/images/flork_love.png" alt="flork">
      <titleComponent v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { delay: 1100 } }" content="Te Amo" class="text-4xl text-center" />
    </div>
  </section>
</mainLayout></template>

<script setup>
import mainLayout from '../layouts/mainLayout.vue'
import titleComponent from '../components/titleComponent.vue'
</script>