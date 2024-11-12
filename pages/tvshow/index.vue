<template>
  <div v-if="status !== 'success'">Carregando</div>
  <div
    v-else
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
const { $api } = useNuxtApp();

const useGetTrendingAll = getAllTvShow($api);
const { data, status } = await useAsyncData(() => useGetTrendingAll.get());
const moviesAndTvShows = data.value?.results;
</script>
