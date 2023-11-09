<template>
    <NotificationGroup group="error">
    <div
      class="w-full inset-0 flex items-start justify-center py-0 pointer-events-none"
    >
      <div class="w-full max-w-sm ">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="-translate-x-8 blur-sm opacity-0"
          enter-to="-translate-x-0 opacity-100"
          leave="transition ease-in duration-500"
          leave-from="opacity-100 "
          leave-to="opacity-0"
          move="transition duration-300"
          move-delay="delay-300"
        >
        <div 
        class=" flex justify-center w-full max-w-sm mx-auto mt-4 overflow-hidden border border-borders rounded-[11px] shadow-md opacity-100 px-2 py-4"
        v-for="notification in notifications"
            :key="notification.id"
        >
        <div class="w-full h-full bg-principal-500/80 flex rounded-[7px]">
        <div class="flex items-center justify-center w-12 ">
          <img src="errorIcon.svg" alt="error_icon" class="text-accent">
            </div>
  
            <div class="px-4 py-2 -mx-3  ">
              <div class="mx-3">
                <span class="font-semibold text-white">{{ notification.title }}</span>
                <p class="text-sm text-white/70">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </div>
          
        </Notification>
      </div>
    </div>
  </NotificationGroup>
  </template>
  
  <script setup>
  </script>
  