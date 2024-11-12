<template>
  <div v-if="status !== 'success'">Carregando</div>
  <div
    v-else
    v-for="tvShow in tvShows"
    class="group col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg"
  >
    <CardComponent
      :imageEndpoint="tvShow?.poster_path"
      :type="tvShow?.media_type"
    />
  </div>
</template>
<script setup lang="ts">
import type { TvShowModel } from '~/model/tvShow/tvShow.model';

const { $api } = useNuxtApp();
let tvShows = ref<TvShowModel[]>();

const useGetTrendingAll = getAllTvShow($api);
const { data, status } = await useAsyncData(() => useGetTrendingAll.get(), {
  server: false,
});

watchEffect(() => {
  if (data.value) {
    tvShows.value = data.value.results || [];
  }
});
</script>
