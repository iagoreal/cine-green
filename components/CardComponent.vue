<template>
  <PrimeCard class="w-auto" unstyled>
    <template #content>
      <NuxtLink :to="`/${props.type}/${props.id}`">
        <div class="relative flex items-center justify-center p-0 md:p-5">
          <img
            alt="user header"
            :src="imageUrl"
            class="rounded-lg opacity-100 group-hover:opacity-50"
          />
        </div>
      </NuxtLink>
    </template>
  </PrimeCard>
</template>
<script setup lang="ts">
const props = defineProps({
  imageEndpoint: {
    type: String,
    default: '',
  },
  id: {
    type: Number,
    default: 1,
  },
  type: {
    type: String,
    default: '',
  },
});
const baseUrl = ref('https://image.tmdb.org/t/p/w500');
const imageUrl = computed(() => baseUrl.value + props?.imageEndpoint);
</script>
