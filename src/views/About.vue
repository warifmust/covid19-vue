<template>
  <div class="about bg-light-gray">
    <div class="block py-24">
      <div class="flex justify-center">
        <unicon name="coronavirus" height="45" width="45" />
        <h1 class="text-4xl font-bold py-4 mx-2">
          Covid Cases
        </h1>
      </div>
      <h1 class="text-3xl font-semibold my-4">
        An updated Covid 19 cases dashboard, world wide
      </h1>
    </div>
  </div>
  <div class="bg-light-gray " style="height: calc(100vh - 332px)">
    <div class="block py-2">
      <p class="font-bold">API is taken from RapidAPI</p>
      <a
        href="https://rapidapi.com/api-sports/api/covid-193?endpoint=apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083"
        class="font-bold underline cursor-pointer"
        target="_blank"
      >
        https://rapidapi.com/api-sports/api/covid-193?endpoint=apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083
      </a>
    </div>
    <div class="flex justify-evenly">
      <div class="flex justify-center py-2">
        <p class="font-bold m-auto">Built with</p>
        <a href="https://v3.vuejs.org/" target="_blank">
          <img src="../assets/logo.png" class="h-8 w-8" />
        </a>
        <p class="font-bold m-auto">3</p>
      </div>
      <div class="py-2">
        By
        <a
          class="font-bold"
          href="https://arifmust.netlify.app/"
          target="_blank"
          >Arif Mustaffa</a
        >
      </div>
      <div class="flex py-2">
        <p class="m-auto">My <span class="font-bold">Github account</span></p>
        <a href="https://github.com/warifmust" target="_blank">
          <unicon name="github" height="32" width="32" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
});
</script>
