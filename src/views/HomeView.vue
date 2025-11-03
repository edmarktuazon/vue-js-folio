<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";
import SquidWardImg from "../assets/images/squidward.jpg";
import EdmarkImg from "../assets/images/edmark.jpg";
import CV from "../assets/docs/edmarktuazon-cv.pdf";
import { reactive, toRefs, computed, ref, onMounted } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import confetti from "canvas-confetti";

const { targetElHeroContent } = useMotionScrollAnim();

const links = reactive({
  facebook: "https://www.facebook.com/me.edmarktuazon",
  instagram: "https://www.instagram.com/_edmarktuazon/",
  linkedin: "https://www.linkedin.com/in/edmarktuazon/",
  github: "https://github.com/edmarktuazon",
});

const { facebook, instagram, linkedin, github } = toRefs(links);

const birthDate = new Date(1998, 10, 3);
const age = computed(() => {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) years--;
  return years;
});

const isRevealed = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("edmark-revealed");
  if (saved === "true") {
    isRevealed.value = true;
  }
});

const viewImg = () => {
  if (isRevealed.value) {
    showNoGoBack();
    return;
  }

  isRevealed.value = true;
  localStorage.setItem("edmark-revealed", "true");

  // Confetti party!
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"],
    scalar: 0.8,
    ticks: 60,
  });
};

const showNoGoBack = () => {
  const tooltip = document.createElement("div");
  tooltip.className =
    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl font-medium text-sm z-50 animate-pulse";
  tooltip.innerHTML = `
    Attempt failed. Squidward is on vacation already — permanently 😝
  `;
  document.body.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 2500);
};
</script>

<template>
  <section
    id="home"
    ref="homeSection"
    class="bg-neutral-800 py-32 md:py-24 min-h-screen grid place-items-center"
  >
    <div
      class="px-8 lg:px-14 2xl:px-0 z-50 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div class="grid md:flex items-center gap-10" ref="targetElHeroContent">
        <div class="space-y-4">
          <h4 class="text-neutral-200 tracking-wide text-xl">Hey, I'm</h4>
          <h1
            class="font-bold text-accent-blue my-4 tracking-wide leading-none text-6xl"
          >
            Edmark Tuazon<br />
          </h1>
          <h2 class="text-neutral-200 tracking-wide text-6xl font-bold">
            I build things for the web.
          </h2>
          <h3 class="text-neutral-200 tracking-wide text-lg">
            A {{ age }} years of age frontend developer with 2 years and
            counting commercial experience, specializing in building responsive
            interfaces and dynamic user experiences for the modern web.
          </h3>
          <div class="pt-8">
            <h3 class="text-neutral-200 mb-2">Let's connect!</h3>
            <div class="flex justify-start items-center gap-3">
              <a :href="facebook" target="_blank"><FacebookIcon /></a>
              <a :href="instagram" target="_blank"><InstagramIcon /></a>
              <a :href="linkedin" target="_blank"><LinkedInIcon /></a>
              <a :href="github" target="_blank"><GitHubIcon /></a>
            </div>
          </div>
        </div>

        <div class="place-items-center mx-auto grid">
          <div
            v-if="!isRevealed"
            class="bg-neutral-600 text-white px-4 py-3 rounded-xl shadow-lg w-72 text-center relative mb-3 font-medium z-10"
          >
            <p class="text-sm leading-snug">
              Squidy’s sad — maybe a new project would cheer him up! 😁 This is
              my favorite character, kinda like my personality 🤨 if you're
              interested click the image to see the real me — unless you’d
              rather stay with Squidward 🙄😆
            </p>
            <span
              class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rotate-45"
            ></span>
          </div>

          <div class="relative w-72 h-72 rounded-xl overflow-hidden shadow-xl">
            <img
              v-if="!isRevealed"
              :src="SquidWardImg"
              alt="Squidward"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer"
              :class="{ 'opacity-0': isRevealed }"
              @click="viewImg"
            />
            <img
              v-if="isRevealed"
              :src="EdmarkImg"
              alt="Edmark Tuazon"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 cursor-not-allowed"
              @click="viewImg"
            />
          </div>
          <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 scale-95 -translate-y-1"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
          >
            <div
              v-if="isRevealed"
              class="bg-neutral-600 text-white px-4 py-3 rounded-xl shadow-lg w-72 text-center relative mt-3 font-medium z-10"
            >
              <p class="text-sm leading-snug">
                <span>Ta-da! The man behind the tentacles 😎</span><br />
                <span
                  >Hire me and I don’t want to go back to Squidward mode
                  😭</span
                >
              </p>
              <span
                class="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rotate-45"
              ></span>
            </div>
          </transition>

          <div class="mt-4 p-2">
            <a
              :href="CV"
              target="_blank"
              class="w-full flex items-center justify-center gap-2 text-neutral-200 p-2 rounded-lg text-center text-sm hover:bg-neutral-200 hover:text-white hover:border-neutral-200 border-neutral-200 border transition-colors"
            >
              Take a peek at my CV
              <font-awesome-icon icon="fa-solid fa-file" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
