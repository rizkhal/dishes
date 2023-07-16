<script setup lang="ts">
import f from 'wretch';
import { ref } from 'vue';
import Username from './Username.vue';
import { useRouter } from 'vue-router';
import Logo from '~/assets/img/logo.svg';
import type { LoginCredentials } from '../../types';

const route = useRouter();
const loading = ref(false);

const API_URL = import.meta.env.VITE_API_URL;

const handleOnLogin = async (credentials: LoginCredentials) => {
  loading.value = true;

  f(`${API_URL}/v1/auth/login`)
    .post(credentials)
    .badRequest((r) => {
      console.log(r.json);
    })
    .json(({ token }) => {
      localStorage.setItem('accessToken', token.accessToken);
      route.push({
        name: 'Home',
      });
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
<template>
  <div class="flex min-h-screen">
    <div class="flex w-full flex-row">
      <div
        class="hidden flex-col justify-between bg-[#ffe85c] lg:flex lg:max-w-sm lg:p-8 xl:max-w-lg xl:p-12"
      >
        <div class="flex items-center justify-start space-x-3">
          <Logo />
          <a href="#" class="text-xl font-medium">Dishes</a>
        </div>
        <div class="space-y-5">
          <h1 class="font-extrabold lg:text-3xl xl:text-5xl xl:leading-snug">
            Enter your account and discover new experiences
          </h1>
        </div>
        <p class="font-medium">© {{ new Date().getFullYear() }} Lamaau</p>
      </div>

      <div
        class="relative flex flex-1 flex-col items-center justify-center px-10"
      >
        <div class="flex w-full items-center justify-center pt-24 lg:hidden">
          <div class="flex items-center justify-start space-x-3">
            <Logo />
            <a href="#" class="text-lg font-medium">Dishes</a>
          </div>
        </div>
        <!-- Login box -->
        <div
          class="flex w-full max-w-lg flex-1 flex-col justify-center space-y-5"
        >
          <div class="flex w-full flex-col space-y-2 text-center">
            <h2 class="text-3xl font-bold md:text-4xl">Sign in to account</h2>
            <p class="text-sm md:text-xl">
              Sign up or log in to place the order
            </p>
          </div>

          <Username @on-login="handleOnLogin" :loading="loading" />
        </div>
      </div>
    </div>
  </div>
</template>
