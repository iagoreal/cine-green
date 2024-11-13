<template>
  <div
    v-for="movie in movies"
    class="group col-span-6 transform rounded-lg transition duration-300 ease-in-out hover:scale-95 hover:bg-gray-800 md:col-span-4 lg:col-span-3 xl:col-span-3"
  >
    <CardComponent
      :imageEndpoint="movie?.poster_path"
      type="movie"
      :id="movie?.id"
    />
  </div>
</template>
<script setup lang="ts">
import type { Movie } from '~/model/Movie/Movie.model';

const { $createApiInstance } = useNuxtApp();
let movies: Ref<Movie[]> = ref([]);

const useGetMovies = getMovies($createApiInstance());

async function getAllMovies() {
  useGetMovies.get().then((res) => {
    movies.value = [...res?.results!];
  });
}

onMounted(() => getAllMovies());
</script>
