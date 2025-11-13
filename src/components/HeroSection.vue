<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";
import SquidWardImg from "../assets/images/squidward.jpg";
import EdmarkImg from "../assets/images/edmark.jpg";
import CV from "../assets/docs/edmarktuazon-cv.pdf";
import { reactive, toRefs, ref, onMounted } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElHeroContent } = useMotionScrollAnim();

const links = reactive({
  facebook: "https://www.facebook.com/me.edmarktuazon",
  instagram: "https://www.instagram.com/_edmarktuazon/",
  linkedin: "https://www.linkedin.com/in/edmarktuazon/",
  github: "https://github.com/edmarktuazon",
});

const { facebook, instagram, linkedin, github } = toRefs(links);
const isRevealed = ref(false);
const showModal = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("edmark-revealed");
  if (saved === "true") {
    isRevealed.value = true;
  }
});

const viewImg = () => {
  if (isRevealed.value) {
    showModal.value = true;
    return;
  }
  isRevealed.value = true;
  localStorage.setItem("edmark-revealed", "true");
};

const closeModal = () => {
  showModal.value = false;
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
        class="grid gap-10 grid-cols-1 md:grid-cols-9 lg:grid-cols-8"
        ref="targetElHeroContent"
      >
        <div class="space-y-4 col-span-1 md:col-span-5">
          <h4 class="text-neutral-200 leading-none text-xl">Hey there, I'm</h4>
          <h1
            class="font-bold text-neutral-400 my-4 ml-0 md:-ml-1 leading-none text-[clamp(4.625rem,_4.2802rem_+_1.7241vw,_5.25rem)]"
          >
            Edmark Tuazon
          </h1>
          <h3 class="text-neutral-200 text-lg">
            A Frontend Web Developer with over 2 years of commercial experience,
            specializing in and focusing on developing user-friendly and dynamic
            web interfaces.
          </h3>
          <div class="pt-8">
            <h3 class="text-neutral-200 mb-3">Connect with Me</h3>
            <div class="flex justify-start items-center gap-3">
              <a
                :href="instagram"
                target="_blank"
                class="group relative flex flex-col items-center"
              >
                <InstagramIcon
                  class="w-6 h-6 text-neutral-400 group-hover:text-pink-500 transition-colors"
                />
                <span
                  class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 whitespace-nowrap"
                >
                  Instagram
                </span>
              </a>
              <a
                :href="linkedin"
                target="_blank"
                class="group relative flex flex-col items-center"
              >
                <LinkedInIcon
                  class="w-6 h-6 text-neutral-400 group-hover:text-blue-500 transition-colors"
                />
                <span
                  class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 whitespace-nowrap"
                >
                  LinkedIn
                </span>
              </a>
              <a
                :href="facebook"
                target="_blank"
                class="group relative flex flex-col items-center"
              >
                <FacebookIcon
                  class="w-6 h-6 text-neutral-400 group-hover:text-blue-600 transition-colors"
                />
                <span
                  class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 whitespace-nowrap"
                >
                  Facebook
                </span>
              </a>
              <a
                :href="github"
                target="_blank"
                class="group relative flex flex-col items-center"
              >
                <GitHubIcon
                  class="w-6 h-6 text-neutral-400 group-hover:text-neutral-100 transition-colors"
                />
                <span
                  class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 whitespace-nowrap"
                >
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="place-content-center mx-auto grid col-span-1 xl:col-span-3">
          <div
            v-if="!isRevealed"
            class="bg-neutral-600 text-white px-4 py-3 rounded-xl shadow-lg w-72 text-center relative mb-3 z-10"
          >
            <p class="text-sm leading-snug">
              Not me but this is my favorite character, kinda like my
              personality 🤨 However Squidy’s looks sad, maybe a new project
              would cheer him up! 😁 If you're interested to see real me, click
              the image — unless you’d rather stay with Squidward 🙄
            </p>
            <span
              class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rotate-45"
            ></span>
          </div>
          <div
            class="relative w-full max-w-md mx-auto aspect-square rounded-xl overflow-hidden shadow-xl group"
          >
            <img
              v-if="!isRevealed"
              :src="SquidWardImg"
              alt="Squidward"
              class="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-100 cursor-pointer hover:scale-105"
              :class="{ 'opacity-0': isRevealed }"
              @click="viewImg"
            />
            <img
              v-if="isRevealed"
              :src="EdmarkImg"
              alt="Edmark Tuazon"
              class="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-100 cursor-pointer hover:scale-105"
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
                  class="underline text-white"
                  ><em>Let's make SpongeBob proud</em>.
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

  <teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/70 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="bg-neutral-800 border border-neutral-700 rounded-xl p-6 max-w-sm w-full shadow-2xl text-center space-y-4"
        >
          <div class="mx-auto rounded-lg overflow-hidden shadow-md">
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTYza2tjZjc2YnR6aTFjOHFwYjdqajBuazVxZmQweTdlamtnbXM4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KtYYRMBUaTEsOJi/giphy.gif"
              alt="Squidward"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="text-neutral-300 text-sm leading-relaxed">
            Uh oh.. Maybe Squidward’s ghosted you and gone. Now he's playing
            clarinet in the afterlife. Let’s leave him alone and peaceful ✨
          </p>
          <button
            @click="closeModal"
            class="mx-auto px-5 py-2 bg-neutral-700 text-neutral-300 rounded-full font-medium hover:bg-neutral-600 hover:text-white transition"
          >
            Okay, I understand 😒
          </button>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.15s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}
</style>
