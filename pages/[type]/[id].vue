<template>
  <div v-if="!movieOrTvShow.id"></div>
  <div
    v-else
    :style="{
      backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0.4)), url(${backgroundUrl})`,
    }"
    class="grid min-h-screen items-center bg-cover bg-fixed bg-center px-10 py-24"
  >
    <div>
      <div class="w-12/12 p-5 md:w-4/12">
        <h1 class="whitespace-normal font-base text-3xl font-bold text-white">
          {{ mediaTitle }}
        </h1>
        <div class="my-2 flex items-center gap-4 text-sm text-white">
          <p class="font-base font-medium">
            {{ yearReleased }}
          </p>
          <p class="font-base font-bold text-green-700">
            {{ voteAverage }}
          </p>
          <p class="font-base font-medium">|</p>
          <p class="font-base font-medium" v-if="queryParams.type === 'tv'">
            {{ runningTime }} min por episodio
          </p>
          <p class="font-base font-medium" v-else>{{ runningTime }} min</p>
        </div>
        <div class="mb-2 flex flex-col gap-2 pb-5 text-white">
          <h3 class="text-lg font-bold">{{ tagline }}</h3>
          <p class="line-clamp-6 text-justify !font-base !text-sm font-medium">
            {{ overview }}
          </p>
        </div>
        <div class="w-fit" v-if="!isAlreadyFavorite">
          <prime-button
            @click="storeFavorite()"
            severity="contrast"
            class="flex transform cursor-pointer items-center !rounded-lg !border-2 !bg-transparent !px-4 !py-2 !font-bold !text-white !shadow-md transition duration-200 hover:scale-95 hover:shadow-2xl"
            label="Favoritar"
            icon="pi pi-heart-fill "
          />
        </div>
        <div class="w-fit text-white" v-else>
          <prime-button
            @click="storeFavorite()"
            severity="danger"
            class="flex transform cursor-pointer items-center !rounded-lg !border-2 !border-red-700 !bg-red-700 !px-4 !py-2 !font-bold !text-white shadow-md transition duration-200 hover:scale-95 hover:shadow-2xl"
            label="Favorito"
            icon="pi pi-heart-fill "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { MovieAndTvShow } from '~/model/movieAndTvShow/movieAndTvShow.model';
import type { QueryParamsModel } from '~/model/queryParams/queryParams.model';

definePageMeta({
  layout: false,
});

const { $createApiInstance } = useNuxtApp();
const route = useRoute();

const backgroundBaseUrl = 'https://image.tmdb.org/t/p/original/';
let movieOrTvShow: Ref<MovieAndTvShow> = ref({});
let isAlreadyFavorite: Ref<boolean> = ref(false);
let favorites: Ref<MovieAndTvShow[]> = ref([]);
const queryParams: Ref<QueryParamsModel> = ref({
  type: route.params.type as string,
  id: route.params.id as string,
});

async function getMediaItem(params: QueryParamsModel) {
  getMovieOrTvShow($createApiInstance())
    .get(params)
    .then((res) => {
      if (res) {
        movieOrTvShow.value = { ...(res! as MovieAndTvShow) };
        getMediaFavorites();
      }
    });
}

function getMediaFavorites(): void {
  favorites.value = getStoredFavorites();
  isFavoriteMedia();
}

function isFavoriteMedia(): void {
  isAlreadyFavorite.value = favorites.value.some(
    (favorite) => favorite.id === movieOrTvShow.value.id,
  );
}

function storeFavorite(): void {
  manageFavorite();
  toggleFavorite();
  setStoredFavorites(favorites.value);
}

function manageFavorite(): void {
  isAlreadyFavorite.value ? removeFavorite() : addFavorite();
}

function addFavorite(): void {
  favorites.value.unshift({
    ...movieOrTvShow.value,
    media_type: route.params.type as string,
  });
}

function removeFavorite(): void {
  favorites.value = favorites.value.filter(
    (favorite) => favorite.id !== movieOrTvShow.value.id,
  );
}

function toggleFavorite(): void {
  isAlreadyFavorite.value = !isAlreadyFavorite.value;
}

const backgroundUrl = computed(
  (): string => backgroundBaseUrl + movieOrTvShow?.value?.backdrop_path,
);

const mediaTitle = computed(
  (): string => movieOrTvShow.value.name! ?? movieOrTvShow.value.title!,
);

const yearReleased = computed(
  (): string =>
    movieOrTvShow.value.release_date?.split('-')?.[0] ??
    movieOrTvShow.value.first_air_date?.split('-')?.[0]!,
);

const voteAverage = computed(
  (): string => movieOrTvShow.value.vote_average?.toFixed(2)!,
);

const runningTime = computed(
  (): number =>
    movieOrTvShow.value.runtime ?? movieOrTvShow.value.episode_run_time?.[0]!,
);

const tagline = computed((): string => movieOrTvShow.value.tagline!);

const overview = computed((): string => movieOrTvShow.value.overview!);

onMounted((): void => {
  getMediaItem(queryParams.value);
});
</script>
