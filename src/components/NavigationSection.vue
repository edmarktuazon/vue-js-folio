<!-- NavigationSection.vue -->
<script setup>
import { reactive, ref, toRefs } from "vue";

const navLinks = reactive({
  about: "About",
  portfolios: "Portfolios",
  work: "Works",
  contact: "Contact",
});
const { about, portfolios, work, contact } = toRefs(navLinks);

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
              href="#about"
              @click.prevent="scrollToSection('about')"
              class="text-neutral-400"
            >
              {{ about }}
            </a>
          </li>
          <li>
            <a
              href="#portfolios"
              @click.prevent="scrollToSection('portfolios')"
              class="text-neutral-400"
            >
              {{ portfolios }}
            </a>
          </li>
          <li>
            <a
              href="#work"
              @click.prevent="scrollToSection('work')"
              class="text-neutral-400"
            >
              {{ work }}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              target="_blank"
              @click.prevent="scrollToSection('contact')"
              class="text-neutral-400"
            >
              {{ contact }}
            </a>
          </li>
        </ul>

        <div class="md:hidden cursor-pointer z-50" @click="toggleMenu">
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded"></span>
        </div>
      </div>
      <transition name="fade">
        <ul
          v-if="isMenuVisible"
          class="md:hidden fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center gap-12 text-xl"
        >
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
              href="#portfolios"
              @click.prevent="scrollToSection('portfolios')"
              class="text-white hover:text-accent-blue font-bold"
            >
              {{ portfolios }}
            </a>
          </li>
          <li>
            <a
              href="#work"
              @click.prevent="scrollToSection('work')"
              class="text-white hover:text-accent-blue font-bold"
            >
              {{ work }}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              target="_blank"
              @click.prevent="scrollToSection('contact')"
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
