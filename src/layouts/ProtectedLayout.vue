<script setup name="ProtectedLayout">
import Overlay from '../dashboard/provider/Overlay.vue';
import TopNavigation from '../dashboard/topnavigation/Index.vue';
import SideNavigation from '../dashboard/sidenavigation/Index.vue';
import DashboardProvider from '../dashboard/provider/Provider.vue';
</script>

<template>
  <DashboardProvider>
    <div class="relative h-screen overflow-hidden bg-gray-900">
      <div class="flex items-start">
        <Overlay />
        <SideNavigation mobile-position="right" />
        <div class="flex h-screen w-full flex-col pl-0 lg:space-y-4 lg:pl-20">
          <TopNavigation />
          <main
            class="h-screen overflow-auto px-2 pb-36 pt-4 md:pb-8 md:pt-4 lg:px-4 lg:pt-0"
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </DashboardProvider>
</template>
