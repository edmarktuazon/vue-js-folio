<script setup>
// import CV from "../assets/docs/edmarktuazon-cv.pdf";
import { ref } from "vue";

const isMenuOpen = ref(false);

const navLinks = [
  { label: "Portfolios", href: "#portfolios" },
  { label: "Job Experience", href: "#work" },

  //   { label: "Get a Quote", href: "#contact" },
  //   { label: "Resume", href: CV, target: "_blank" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClick = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="fixed top-0 w-full z-[999] bg-neutral-900">
    <nav class="px-8 xl:px-14 2xl:px-0">
      <div class="flex lg:justify-around justify-between items-center py-6">
        <!-- Logo -->
        <a href="/" class="z-50">
          <span class="text-neutral-400 font-bold">DevelopedByEd.</span>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex gap-8 items-center">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" @click="handleClick" class="text-neutral-400">
              {{ link.label }}
            </a>
          </li>
          <li>
            <!-- Get a Quote Button (Desktop) -->
            <a
              href="#contact"
              @click="handleClick"
              class="hidden md:block bg-neutral-400 hover:bg-neutral-300 text-neutral-900 font-semibold px-6 py-2.5 rounded-xl transition-all active:scale-95"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        <!-- Burger -->
        <div class="md:hidden cursor-pointer z-50" @click="toggleMenu">
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded"></span>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <ul
          v-if="isMenuOpen"
          class="md:hidden fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center gap-12 text-xl"
        >
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click="handleClick"
              class="text-neutral-400 font-bold"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <!-- Get a Quote Button (Desktop) -->
            <a
              href="#contact"
              @click="handleClick"
              class="bg-neutral-400 hover:bg-neutral-300 text-neutral-900 font-semibold px-6 py-2.5 rounded-xl transition-all active:scale-95"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
