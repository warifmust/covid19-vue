<template>
  <div class="home bg-light-gray">
    <div class="block py-24">
      <!-- <Heading /> -->
      <div class="flex justify-center">
        <unicon name="coronavirus" height="45" width="45" />
        <h1 class="text-4xl font-bold py-4 mx-2">
          Covid Cases
        </h1>
      </div>
      <h1 class="text-3xl font-semibold my-4">
        An updated Covid 19 cases dashboard, world wide
      </h1>
      <h1 class="text-1xl font-semibold my-4">
        Find cases by country name
      </h1>
      <input
        id="country"
        placeholder="Please key in country name ie: Malaysia"
        class="w-2/4 h-12 m-4 px-2 border border-solid border-asphalt rounded"
        v-model="country"
        v-on:input="handleOnChange"
      />
      <h1 class="text-1xl text-silver font-normal italic my-4">
        Filter by Category will be coming soon
      </h1>
    </div>
    <div
      class="flex justify-center flex-wrap"
      :style="listData.length < 2 ? 'height: calc(100vh - 452px)' : ''"
    >
      <div
        class="h-48 m-1 rounded bg-white shadow-md p-4 cursor-pointer"
        style="width: 32.33%"
        v-for="(data, index) in listData"
        :key="index"
      >
        <p class="text-xl font-bold text-left my-1">{{ data.country }}</p>
        <div class="flex justify-start my-1">
          <unicon name="globe" />
          <p class="text-base font-normal text-left mx-1">
            {{ data.continent }}
          </p>
        </div>
        <!-- First line -->
        <div class="flex justify-between">
          <div class="flex justify-start my-1">
            <unicon name="users-alt" />
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.population) }}
            </p>
          </div>
          <div class="flex justify-start my-1">
            <!-- <unicon name="flip-h-alt" /> -->
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.cases["total"]) }} total
            </p>
          </div>
          <div class="flex justify-start my-1">
            <!-- <unicon name="flip-h-alt" /> -->
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.cases["active"]) }} active
            </p>
          </div>
        </div>
        <!-- Second line -->
        <div class="flex justify-between">
          <div class="flex justify-start my-1">
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.cases.new) }} new
            </p>
          </div>
          <div class="flex justify-start my-1">
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.cases.recovered) }} recovered
            </p>
          </div>
          <div class="flex justify-start my-1">
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.cases.critical) }}
              critical
            </p>
          </div>
        </div>
        <!-- Third line -->
        <div class="flex justify-between">
          <div class="flex justify-start my-1">
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.deaths.new) }} new death
            </p>
          </div>
          <div class="flex justify-start my-1">
            <p class="mx-1 font-bold">
              {{ handleHugeNum(data.deaths.total) }} total death
            </p>
          </div>
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
// import Heading from "@/components/Heading.vue";

export default defineComponent({
  name: "Home",
  mounted() {
    axios
      .get("https://covid-193.p.rapidapi.com/statistics", {
        headers: {
          "x-rapidapi-key":
            "3d441973b3msh022be63635ed551p19e279jsn9e3bd8a1b48d",
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
      })
      .then((res) => {
        // console.log(res.data.response);
        const unfiltered = res.data.response;
        this.listData = unfiltered;
        this.tempData = unfiltered;
      });
  },
  methods: {
    handleHugeNum(num: number) {
      let result;
      if (num > 1000_000_000) {
        result = `${Math.round((num / 1000_000_000) * 100) / 100}B`;
      } else if (num > 1000_000) {
        result = `${Math.round((num / 1000_000) * 100) / 100}M`;
      } else if (num > 1000) {
        result = `${Math.round((num / 1000) * 100) / 100}k`;
      } else if (num === null) {
        result = 0;
      } else {
        result = num;
      }
      return result;
    },
  },
  data() {
    return {
      listData: [],
      tempData: [],
      country: "",
    };
  },
  computed: {
    handleOnChange() {
      // @ts-ignore
      const filtered = this.listData.filter(
        (data: any) => data.country === this.country
      );
      console.log(this.country, typeof filtered);
      if (filtered.length > 0) {
        this.listData = filtered;
      } else {
        this.listData = this.tempData;
        // console.log("Get old data");
      }
    },
  },
});
</script>
