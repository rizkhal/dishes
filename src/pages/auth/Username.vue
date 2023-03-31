<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['onLogin']);

const model = reactive({
  username: 'rizkhal',
  password: 'secret',
});

const submit = () => {
  emit('onLogin', {
    username: model.username,
    password: model.password,
  });
};
</script>
<template>
  <div class="flex max-w-lg flex-col space-y-5">
    <input
      v-model="model.username"
      type="text"
      placeholder="Username"
      class="flex rounded-lg border-2 border-black px-3 py-2 font-medium placeholder:font-normal md:px-4 md:py-3"
    />
    <input
      v-model="model.password"
      type="text"
      placeholder="Password"
      class="flex rounded-lg border-2 border-black px-3 py-2 font-medium placeholder:font-normal md:px-4 md:py-3"
    />
    <button
      class="flex flex-none items-center justify-center rounded-lg border-2 border-black bg-black px-3 py-2 font-medium text-white focus:ring-2 focus:ring-black focus:ring-offset-2 md:px-4 md:py-3"
      @click="submit"
    >
      Continue With Email
    </button>
  </div>
</template>
