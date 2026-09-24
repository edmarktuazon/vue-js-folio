<script setup>
// import CV from "../assets/docs/edmarktuazon-cv.pdf";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const isMenuOpen = ref(false);

const navLinks = [
  { label: "Portfolios", href: "#portfolios" },
  { label: "Experience", href: "#work" },
  { label: "Testimonials", href: "#recommendations" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (hash) => {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const goToSection = (hash) => {
  isMenuOpen.value = false;

  if (route.path === "/") {
    scrollToSection(hash);
  } else {
    router.push({ path: "/", hash }).then(() => {
      setTimeout(() => scrollToSection(hash), 100);
    });
  }
};

const handleClick = (href) => {
  goToSection(href);
};
</script>

<template>
  <header class="fixed top-0 w-full z-[999] bg-neutral-900">
    <nav class="px-4 md:px-8">
      <div class="flex lg:justify-around justify-between items-center py-6">
        <!-- Logo -->
        <router-link to="/" class="z-50">
          <span class="text-neutral-400 font-bold">DevelopedByEd.</span>
        </router-link>

        <!-- Desktop Nav -->
        <ul class="hidden lg:flex gap-8 items-center">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="handleClick(link.href)"
              class="text-neutral-400 hover:text-neutral-100 transition-all cursor-pointer"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <!-- Open to full-time (Desktop) -->
            <a
              href="#contact"
              @click.prevent="handleClick('#contact')"
              class="text-neutral-100 border-b border-dashed border-neutral-500 pb-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              <span
                class="w-[7px] h-[7px] rounded-full bg-green-400 inline-block"
              ></span>
              Open to full-time
            </a>
          </li>
          <li>
            <!-- Project Inquiry (Desktop) -->
            <a
              href="#contact"
              @click.prevent="handleClick('#contact')"
              class="hidden md:block bg-neutral-400 hover:bg-neutral-300 text-neutral-900 font-bold focus:outline-none focus:ring-2 focus:ring-neutral-400/50 transition px-6 py-2.5 rounded-xl active:scale-95 cursor-pointer"
            >
              Project Inquiry
            </a>
          </li>
        </ul>

        <!-- Burger -->
        <div class="lg:hidden cursor-pointer z-50" @click="toggleMenu">
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded mb-1"></span>
          <span class="block bg-neutral-200 h-[2px] w-5 rounded"></span>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <ul
          v-if="isMenuOpen"
          class="lg:hidden fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center gap-12 text-xl"
        >
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="handleClick(link.href)"
              class="text-neutral-400 font-bold hover:text-neutral-100 cursor-pointer"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <!-- Open to full-time (Mobile) -->
            <a
              href="#contact"
              @click.prevent="handleClick('#contact')"
              class="font-bold text-neutral-100 border-b border-dashed border-neutral-500 pb-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              <span
                class="w-[7px] h-[7px] rounded-full bg-green-400 inline-block"
              ></span>
              Open to full-time
            </a>
          </li>
          <li>
            <!-- Get a Quote Button (Mobile) -->
            <a
              href="#contact"
              @click.prevent="handleClick('#contact')"
              class="font-bold bg-neutral-400 hover:bg-neutral-300 text-neutral-900 px-6 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              Project Inquiry
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
