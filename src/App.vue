<template>
  <div
    id="nav"
    class="flex justify-between p-3 font-bold text-gray-800 bg-green-sea fixed w-full"
  >
    <div class="flex">
      <img class="h-10 w-10 transform rotate-90" src="./assets/logo.png" />
      <p class="my-auto mx-4 text-xl">Covid Cases</p>
    </div>
    <div class="my-auto mx-0">
      <router-link to="/" class="mx-4">Home</router-link>
      <router-link to="/about" class="mx-4">About</router-link>
    </div>
  </div>
  <router-view />
</template>
