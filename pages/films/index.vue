<template>
  <div
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
let movies: Ref<Movie[]> = ref([]);

const useGetMovies = getMovies($api);

async function getAllMovies() {
  useGetMovies.get().then((res) => {
    movies.value = [...res?.results!];
  });
}

onMounted(() => getAllMovies());
</script>
