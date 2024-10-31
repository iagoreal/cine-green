<template>
  <div class="card z-10 fixed top-0 w-full">
    <PrimeMenuBar
      :model="items"
      class="bg-[#181818] !rounded-none cursor-pointer"
      pt:item:class="hover:bg-sky-700"
    >
      <template #start>
        <img class="hidden md:block h-[40px]" alt="" />
      </template>
      <template #item="{ item }">
        <NuxtLink :to="{name: item?.route}">
        <span :class="item.icon" />
        <span class="!flex items-center ml-8 my-2 lg:mb-0 md:ml-6">{{
          item.label
        }}</span>
        </NuxtLink>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2 mr-3">
          <NuxtLink to="favorites">
          <i class="pi pi-heart-fill" style="font-size: 2rem; color: red"></i>
        </NuxtLink>
        </div>
      </template>
    </PrimeMenuBar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'navbar',
  data() {
    return {
      items: [
        {
          label: 'Home',
          route: 'index',
        },
        {
          label: 'Films',
          route: 'films',
        },
        {
          label: 'Tv Show',
          route: 'tvshow',
          badge: 3,
        },
      ],
    };
  },
};
</script>
<style>
.p-menubar-item-content:hover {
  background: none !important;
}
[data-p-focused='true'] > .p-menubar-item-content {
  background: none !important;
}
</style>
