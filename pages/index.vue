<template>
  <div
    v-for="movieOrTvShow in moviesAndTvShows"
    class="group col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg"
  >
    <CardComponent
      :imageEndpoint="movieOrTvShow?.poster_path"
      :type="movieOrTvShow?.media_type"
    />
  </div>
</template>
<script setup lang="ts">
import { TrendingAll } from '~/model/TrendingAll/TrendingAll.model';

const { $api } = useNuxtApp();
let moviesAndTvShows: Ref<TrendingAll[]> = ref([]);

const useGetTrendingAll = getTrendingAll($api);

async function getAllMoviesAndTvShow() {
  useGetTrendingAll.get().then((res) => {
    moviesAndTvShows.value = [...res.results!];
  });
}

onMounted(() => getAllMoviesAndTvShow());
</script>
