<template>
  <div class="mb-5 flex justify-center">
    <p class="font-base text-3xl font-bold text-white">Meus Favoritos</p>
  </div>
  <div class="grid grid-cols-12 justify-items-center items-center gap-3" v-if="favorites.length > 0 ">
    <div v-for="favorite in favorites" :key="favorite.id"
      class="group col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg">

      <CardComponent :id="favorite.id" :imageEndpoint="favorite.poster_path" :type="favorite.media_type" />
    </div>
  </div>
  <div v-else class="font-base mt-4 font-medium text-white">Você não possui favoritos.</div>
</template>

<script setup lang="ts">
import type { MovieAndTvShow } from '~/model/movieAndTvShow/movieAndTvShow.model';

definePageMeta({
  layout: 'favorites',
});

const favorites: Ref<MovieAndTvShow[]> = ref([])

function getMediaFavorites(): void {
  favorites.value = getStoredFavorites();
}

onMounted(() => {
  getMediaFavorites()
})
</script>
