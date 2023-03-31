<script setup>
import { useRouter } from 'vue-router';

import SidenavItem from './Item.vue';
import HomeIcon from '~/assets/img/home.svg';
import BuildingStoreIcon from '~/assets/img/building-store.svg';
import LogoutIcon from '~/assets/img/logout.svg';

const router = useRouter();

const onLogout = () => {
  localStorage.clear('accessToken');
  router.push({
    name: 'Login',
  });
};
</script>

<template>
  <ul class="md:pl-3">
    <SidenavItem title="Home" to="/home">
      <HomeIcon />
    </SidenavItem>

    <SidenavItem title="Product" to="/products">
      <BuildingStoreIcon />
    </SidenavItem>

    <SidenavItem title="Logout" @click="onLogout">
      <LogoutIcon />
    </SidenavItem>
  </ul>
</template>
