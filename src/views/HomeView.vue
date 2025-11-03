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
    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl text-sm z-50 animate-pulse";
  tooltip.innerHTML = `
    Click all you want. Squidward’s ghosted you,
    and he’s playing clarinet in the afterlife.
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
    class="bg-neutral-800 pb-24 pt-44 lg:py-24 min-h-screen grid place-items-center"
  >
    <div
      class="px-8 lg:px-14 2xl:px-0 z-50 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="grid gap-10 grid-cols-1 md:grid-cols-8"
        ref="targetElHeroContent"
      >
        <div class="space-y-4 col-span-1 md:col-span-5">
          <h4 class="text-neutral-200 tracking-wide leading-none text-xl">
            Hey there, I'm
          </h4>
          <h1 class="font-bold text-neutral-400 my-4 leading-none text-7xl">
            Edmark Tuazon
          </h1>
          <h3 class="text-neutral-200 tracking-wide text-lg">
            A {{ age }}-year-old frontend developer with over 2 years of
            commercial experience, specializing in building responsive
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

        <div class="place-items-center mx-auto grid col-span-1 xl:col-span-3">
          <div
            v-if="!isRevealed"
            class="bg-neutral-600 text-white px-4 py-3 rounded-xl shadow-lg w-72 text-center relative mb-3 z-10"
          >
            <p class="text-sm leading-snug">
              This is my favorite character, kinda like my personality 🤨 but
              Squidy’s looks sad, maybe a new project would cheer him up! 😁 if
              you're interested to see real me, click the image — unless you’d
              rather stay with Squidward 🙄
            </p>
            <span
              class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rotate-45"
            ></span>
          </div>

          <div
            class="relative w-full max-w-md mx-auto aspect-square rounded-xl overflow-hidden shadow-xl"
          >
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
              class="bg-neutral-600 text-white px-4 py-3 rounded-xl shadow-lg w-72 text-center relative mt-3 z-10"
            >
              <p class="text-sm leading-snug">
                <span>Ta-da! The man behind the tentacles. </span>
                <span>Don’t make me slip back into Squidward mode 😭</span
                >&nbsp;<a
                  :href="CV"
                  target="_blank"
                  class="underline text-white transition"
                >
                  <em>Let's make SpongeBob proud</em>
                </a>
              </p>
              <span
                class="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rotate-45"
              ></span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
