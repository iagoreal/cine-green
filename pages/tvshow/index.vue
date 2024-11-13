<template>
  <div
    v-for="tvShow in tvShows"
    class="group col-span-6 transform rounded-lg transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-800 md:col-span-4 lg:col-span-3 xl:col-span-3"
  >
    <CardComponent
      :imageEndpoint="tvShow?.poster_path"
      type="tv"
      :id="tvShow?.id"
    />
  </div>
</template>
<script setup lang="ts">
import type { TvShowModel } from '~/model/tvShow/tvShow.model';

const { $createApiInstance } = useNuxtApp();
let tvShows: Ref<TvShowModel[]> = ref([]);

const useGetTvShow = getTvShow($createApiInstance());

async function getAllTvShow() {
  useGetTvShow.get().then((res) => {
    tvShows.value = [...res?.results!];
  });
}

onMounted(() => getAllTvShow());
</script>
