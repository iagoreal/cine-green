<template>
  <div class="card z-10 fixed w-full">
    <PrimeMenuBar :model="items" class="bg-[#181818] !rounded-none" pt:item:class="hover:bg-sky-700">
      <template #start>
        <img class="hidden md:block h-[40px]" alt="" />
      </template>
      <template #item="{ item }">
        <span :class="item.icon" />
        <span class="!flex items-center ml-8 my-2 lg:mb-0 md:ml-6">{{
          item.label
        }}</span>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2 mr-3">
          <i class="pi pi-heart-fill" style="font-size: 2rem; color: red"></i>
        </div>
      </template>
    </PrimeMenuBar>
  </div>
</template>

<script lang="ts">
import type { Style } from '#build/components';

export default {
  name: 'navbar',
  data() {
    return {
      items: [
        {
          label: 'Home',
          route: '/',
        },
        {
          label: 'Films',
          route: '/films',
        },
        {
          label: 'Tv Show',
          route: '/tvshow',
          badge: 3,
        },
      ],
    };
  },
};
</script> 
