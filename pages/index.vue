<template>
  <div
    v-for="movieOrTvShow in moviesAndTvShows"
    class="group col-span-6 transform rounded-lg transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-800 md:col-span-4 lg:col-span-3 xl:col-span-3"
  >
    <CardComponent
      :imageEndpoint="movieOrTvShow?.poster_path"
      :type="movieOrTvShow?.media_type"
      :id="movieOrTvShow?.id"
    />
  </div>
</template>
<script setup lang="ts">
import { TrendingAll } from '~/model/TrendingAll/TrendingAll.model';

const { $createApiInstance } = useNuxtApp();
let moviesAndTvShows: Ref<TrendingAll[]> = ref([]);

const useGetTrendingAll = getTrendingAll($createApiInstance());

async function getAllMoviesAndTvShow() {
  useGetTrendingAll.get().then((res) => {
    moviesAndTvShows.value = [...res.results!];
  });
}

onMounted(() => getAllMoviesAndTvShow());
</script>
