<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0.4)), url({backgroundUrl})`,
    }"
    class="bg-fixed bg-center bg-cover min-h-screen py-24 px-10 grid items-center"
  >
    <div>
      <slot />
    </div>
  </div>
</template>
