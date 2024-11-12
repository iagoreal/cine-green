<template>
  <div v-if="status !== 'success'">Carregando</div>
  <div
    v-else
    v-for="movie in movies"
    class="group col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg"
  >
    <CardComponent
      :imageEndpoint="movie?.poster_path"
      :type="movie?.media_type"
    />
  </div>
</template>
<script setup lang="ts">
import type { Movie } from '~/model/Movie/Movie.model';

const { $api } = useNuxtApp();
let movies = ref<Movie[]>();

const useGetMovies = getMovies($api);
const { data, status } = await useAsyncData(() => useGetMovies.get(), {
  server: false,
});

watchEffect(() => {
  if (data.value) {
    movies.value = data.value.results || [];
  }
});
</script>
