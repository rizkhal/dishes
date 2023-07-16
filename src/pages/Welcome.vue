<template>
  <div class="flex flex-col h-screen items-center justify-center bg-[#ffe85c]">
    <h1 class="text-4xl font-bold mb-10">Welcome</h1>
    <router-link
      class="border-b-4 border-black font-bold"
      :to="{ name: 'Login' }"
      >Login</router-link
    >
  </div>
</template>
