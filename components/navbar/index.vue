<template>
  <div class="card fixed top-0 z-10 w-full">
    <PrimeMenuBar
      :model="items"
      class="cursor-pointer !rounded-none !border-none bg-[#181818]"
      pt:item:class="hover:bg-sky-700"
    >
      <template #start>
        <img class="hidden h-[40px] md:block" alt="" />
      </template>
      <template #item="{ item }">
        <NuxtLink :to="{ name: item?.route }">
          <span :class="item.icon" />
          <span class="my-2 ml-8 !flex items-center md:ml-6 lg:mb-0">{{
            item.label
          }}</span>
        </NuxtLink>
      </template>
      <template #end>
        <div class="align-items-center mr-3 flex gap-2">
          <NuxtLink to="/favorites">
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
