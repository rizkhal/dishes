<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'RootLayout',
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      const layout = route?.meta?.layout;

      if (layout) {
        return layout;
      }

      return 'ProtectedLayout';
    });
    return {
      layout,
    };
  },
});
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component, route }" class="flex-1">
      <transition name="page">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </component>
</template>

<style lang="css">
.page-enter-active {
  transition: all 0.1s ease-out;
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
