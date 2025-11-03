<!-- AboutSection.vue -->
<script setup>
import CV from "../assets/docs/edmarktuazon-cv.pdf";
import EdmarkImg from "../assets/images/edmark.jpg";
import SquidWardImg from "../assets/images/squidward.jpg";
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import { reactive, ref, markRaw } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElAboutTextList } = useMotionScrollAnim();

const currentImg = ref(SquidWardImg);
const isRevealed = ref(false);

const viewImg = () => {
  currentImg.value = EdmarkImg;
  isRevealed.value = true;
};

const faSkills = reactive([
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3 (SASS)", icon: "fa-brands fa-css3-alt" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "Vue.js", icon: "fa-brands fa-vuejs" },
  { name: "PHP", icon: "fa-brands fa-php" },
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "GitHub", icon: "fa-brands fa-github" },
  { name: "GoDaddy", icon: "fa-solid fa-globe" },
  { name: "Hostinger", icon: "fa-solid fa-server" },
  { name: "Namecheap", icon: "fa-solid fa-cloud" },
]);

const customSkills = reactive([
  {
    name: "Tailwind CSS",
    icon: markRaw(TailwindCSSIcon),
  },
]);
</script>

<template>
  <section
    id="about"
    ref="aboutSection"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="z-50 px-8 lg:px-14 2xl:px-0 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="flex justify-start items-center my-8 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl mb-2 whitespace-wrap md:whitespace-nowrap"
        >
          Technologies I've been Working
        </h3>
      </div>
      <div class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-auto">
        <div class="place-items-center mx-auto grid">
          <div
            v-if="!isRevealed"
            class="bg-neutral-600 text-white px-4 py-3 rounded-xl shadow-lg w-72 text-center relative mb-3"
          >
            <p class="text-sm leading-snug">
              This is my favorite character; Kinda like my personality 😏 To
              view real me, click the image — unless you’d rather stay with
              Squidward! 😆
            </p>
            <span
              class="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rotate-45"
            ></span>
          </div>
          <img
            :src="currentImg"
            alt="Clickable image"
            class="w-64 h-64 object-cover cursor-pointer rounded-xl"
            @click="viewImg"
          />
          <div class="mt-8 mx-16">
            <a
              :href="CV"
              target="_blank"
              class="w-full whitespace-nowrap text-neutral-200 p-2 rounded-lg mt-8 text-center text-sm hover:bg-neutral-200 hover:text-white border-neutral-200 border"
            >
              Take a peek at my CV&nbsp;&nbsp;<font-awesome-icon
                icon="fa-solid fa-file"
              />
            </a>
          </div>
        </div>
        <div class="relative lg:mt-0 col-span-1 xl:col-span-2 row-start-1">
          <p class="text-neutral-200 leading-7 mb-8">
            Using modern frontend technologies comprising HTML5, CSS3 (SASS),
            JavaScript, and Vue.js, I have experience developing dynamic,
            responsive websites. For efficient UI development, I use frameworks
            like Tailwind CSS and Bootstrap and version control with Git and
            GitHub. Furthermore, I have managed domain and web hosting services
            using GoDaddy, Namecheap and Hostinger, providing smooth website
            performance and deployment.
          </p>
          <ul
            ref="targetElAboutTextList"
            class="grid grid-cols-2 sm:grid-cols-3 gap-0 sm:gap-1 items-center text-neutral-200 leading-7"
          >
            <li
              v-for="(skill, index) in faSkills"
              :key="'fa-' + index"
              class="flex items-center gap-2 leading-7 text-sm text-neutral-200"
            >
              <font-awesome-icon :icon="skill.icon" />
              <span>{{ skill.name }}</span>
            </li>
            <li
              v-for="(skill, index) in customSkills"
              :key="'custom-' + index"
              class="flex items-center gap-2 leading-7 text-sm text-neutral-200"
            >
              <component :is="skill.icon" class="w-4 h-4 text-cyan-400" />
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
