<!-- NavigationSection.vue -->
<script setup>
import { reactive, ref, toRefs } from "vue";

const navLinks = reactive({
  home: "Home",
  about: "About",
  portfolio: "Portfolios",
  contact: "Contact",
});
const { home, about, portfolio, contact } = toRefs(navLinks);

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    isMenuVisible.value = false;
  }
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

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-8 items-center">
          <li>
            <a
              href="#home"
              @click.prevent="scrollToSection('home')"
              class="text-neutral-400"
            >
              {{ home }}
            </a>
          </li>
          <li>
            <a
              href="#about"
              @click.prevent="scrollToSection('about')"
              class="text-neutral-400"
            >
              {{ about }}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              @click.prevent="scrollToSection('portfolio')"
              class="text-neutral-400"
            >
              {{ portfolio }}
            </a>
          </li>
          <li>
            <a
              href="mailto:edmarktuazon03@gmail.com"
              target="_blank"
              class="text-neutral-400"
            >
              {{ contact }}
            </a>
          </li>
        </ul>

        <!-- Mobile Hamburger -->
        <div class="md:hidden cursor-pointer z-50" @click="toggleMenu">
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded"></span>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <ul
          v-if="isMenuVisible"
          class="md:hidden fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center gap-12 text-xl"
        >
          <li>
            <a
              href="#home"
              @click.prevent="scrollToSection('home')"
              class="text-white hover:text-accent-blue font-bold"
            >
              {{ home }}
            </a>
          </li>
          <li>
            <a
              href="#about"
              @click.prevent="scrollToSection('about')"
              class="text-white hover:text-accent-blue font-bold"
            >
              {{ about }}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              @click.prevent="scrollToSection('portfolio')"
              class="text-white hover:text-accent-blue font-bold"
            >
              {{ portfolio }}
            </a>
          </li>
          <li>
            <a
              href="mailto:edmarktuazon03@gmail.com"
              target="_blank"
              class="text-white hover:text-accent-blue font-bold"
            >
              {{ contact }}
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
