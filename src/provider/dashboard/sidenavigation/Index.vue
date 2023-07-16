<script setup>
import { inject } from 'vue';
import SidenavItems from './Items.vue';
import SidenavHeader from './Header.vue';

defineProps({
  mobilePosition: {
    type: String,
    default: '',
  },
});

const open = inject('open');

const style = {
  left: 'left-0 ',
  right: 'right-0 lg:left-0',
};
</script>

<template>
  <aside
    class="top-0 h-screen overflow-y-auto bg-gray-900 text-white lg:absolute lg:z-40 lg:block"
    :class="[
      style[mobilePosition],
      open
        ? 'absolute z-40 w-8/12 transition-all duration-500 ease-in sm:w-5/12 md:w-64'
        : 'hidden transition-all duration-700 ease-out lg:w-24',
    ]"
  >
    <div class="pb-32 lg:pb-12">
      <SidenavHeader />
      <SidenavItems />
    </div>
  </aside>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.scrollbar {
  -ms-overflow-style: none; /* make scrollbar transparent on Firefox, IE and Edge*/
  scrollbar-width: none;
}
</style>
