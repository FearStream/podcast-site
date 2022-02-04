<template>
  <!-- Dark mode switcher example -->
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">
        Theme Switcher Demo
      </h2>
    </template>

    <div :class="isDark ? 'dark' : ''" class="py-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow-xl dark:bg-black sm:rounded-lg">
          <div class="p-6">
            <toggle-icon ref="themeSwitch" @click="toggleTheme()">
              <template #enabledIcon>
                <moon-icon />
              </template>
              <sun-icon />
            </toggle-icon>
          </div>

          <h2 class="p-12 text-xl font-semibold leading-tight text-gray-800 dark:text-white dark:bg-black">
            Lorem Ipsum
          </h2>

          <div class="p-6">
            <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <li v-for="person in people" :key="person.email" class="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow dark:bg-gray-600">
                <div class="flex flex-col flex-1 p-8">
                  <img class="flex-shrink-0 w-32 h-32 mx-auto rounded-full" :src="person.imageUrl" alt="">
                  <h3 class="mt-6 text-sm font-medium text-gray-900 dark:text-white">
                    {{ person.name }}
                  </h3>
                  <dl class="flex flex-col justify-between flex-grow mt-1">
                    <dt class="sr-only">
                      Title
                    </dt>
                    <dd class="text-sm text-gray-500 dark:text-white">
                      {{ person.title }}
                    </dd>
                    <dt class="sr-only">
                      Role
                    </dt>
                    <dd class="mt-3">
                      <span class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">{{ person.role }}</span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div class="flex -mt-px divide-x divide-gray-200 dark:text-white">
                    <div class="flex flex-1 w-0">
                      <a :href="`mailto:${person.email}`" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg dark:text-white hover:text-gray-500">
                        <MailIcon class="w-5 h-5 text-gray-400 dark:text-white" aria-hidden="true" />
                        <span class="ml-3">Email</span>
                      </a>
                    </div>
                    <div class="flex flex-1 w-0 -ml-px">
                      <a :href="`tel:${person.telephone}`" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg dark:text-white hover:text-gray-500">
                        <PhoneIcon class="w-5 h-5 text-gray-400 dark:text-white" aria-hidden="true" />
                        <span class="ml-3">Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script lang='ts'>

import { MailIcon, PhoneIcon } from "@heroicons/vue/solid";
import { defineComponent, ref, onMounted, watch} from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import ToggleIcon from "@/Components/ToggleIcon.vue";
import { useStorage } from "vue3-storage";
import MoonIcon from "@/Components/Icons/Moon.vue";
import SunIcon from "@/Components/Icons/Sun.vue";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },

  {
    name: "The Joker",
    title: "Evil Villain",
    role: "User",
    email: "joker@ihatebatman.com",
    telephone: "+1-234-555-HaHa",
    imageUrl:
        "https://media.vogue.fr/photos/5d9cdf93c3805a0008c821b6/1:1/w_2362,h_2362,c_limit/076_CHL_024006.jpg",
  },

  {
    name: "Dark Helmet",
    title: "Spaceballs Captain",
    role: "User",
    email: "lordhelmet@spaceballz.com",
    telephone: "+1-123-345-BALL",
    imageUrl:
        "https://static.wikia.nocookie.net/spaceballs/images/2/25/Dark_Helmet.jpg",
  },

  {
    name: "Mr. Bean",
    title: "Himself",
    role: "User",
    email: "mrbean@bean.com",
    telephone: "+44123456789",
    imageUrl:
        "https://imgix.ranker.com/user_node_img/418/8358897/original/mr-bean-film-characters-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=144&w=144",
  }];

export default defineComponent({
  components: {
    AppLayout,
    ToggleIcon,
    MailIcon,
    PhoneIcon,
    SunIcon,
    MoonIcon,
  },

  setup() {
    const storage = useStorage();
    const themeSwitch = ref();
    const isDark = ref(false);
    isDark.value = storage.getStorageSync("isDark") ?? false;

    onMounted(() => {
      themeSwitch.value.enabled = storage.getStorageSync("isDark") ?? false;
    });

    function toggleTheme() {
      isDark.value = !isDark.value;
    }

    watch(isDark, (newVal) => {
      storage.setStorageSync("isDark", newVal);
    });

    return {
      people,
      themeSwitch,
      storage,
      isDark,
      toggleTheme,
    };
  },

});
</script>
