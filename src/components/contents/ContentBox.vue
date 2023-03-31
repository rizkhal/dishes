<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        style: {
          background: 'bg-yellow-200',
          progressbar: 'bg-yellow-700',
          text: 'text-yellow-600',
        },
        info: {
          date: 'December 10, 2020',
          title: 'Web Designing',
          subtitle: 'Prototyping',
          progress: '90%',
          timeLeft: '2 Days Left',
          participants: [
            {
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            },
          ],
        },
      };
    },
  },
});
</script>

<template>
  <div class="w-full md:w-4/12">
    <div class="p-2">
      <div class="rounded-3xl p-4" :class="item.style.background">
        <div class="flex items-center">
          <span class="text-sm">{{ item.info.date }}</span>
        </div>
        <div class="mb-4 mt-5 text-center">
          <p class="text-base font-bold opacity-70">{{ item.info.title }}</p>
          <p class="mt-2 text-sm opacity-70">{{ item.info.subtitle }}</p>
        </div>
        <div>
          <p class="m-0 text-sm font-bold">Progress</p>
          <div class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white">
            <span
              class="block h-1 rounded-md"
              :style="{ width: item.info.progress }"
              :class="[item.style.progressbar]"
            />
          </div>
          <p class="m-0 text-right text-sm font-bold">
            {{ item.info.progress }}
          </p>
        </div>
        <div class="relative flex justify-between pt-4">
          <div class="flex items-center">
            <img
              v-for="user in item.info.participants"
              :key="user.id"
              class="h-5 w-5 overflow-hidden rounded-full object-cover"
              :src="user.image"
              alt="participant"
            />
            <button
              class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div
            class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold"
            :class="item.style.text"
          >
            {{ item.info.timeLeft }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
