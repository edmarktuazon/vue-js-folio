<!-- AboutSection.vue -->
<script setup>
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import { reactive, markRaw } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElAboutContent } = useMotionScrollAnim();

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
      <div
        class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-auto"
        ref="targetElAboutContent"
      >
        <div class="relative lg:mt-0 col-span-1 xl:col-span-2 row-start-1">
          <p class="text-neutral-200 leading-7 mb-8">
            Using modern frontend technologies comprising strong I have
            experience developing dynamic, responsive websites. For efficient UI
            development, I use frameworks like Tailwind CSS and Bootstrap and
            version control with Git and GitHub. Furthermore, I have managed
            domain and web hosting services using GoDaddy, Namecheap and
            Hostinger, providing smooth website performance and deployment.
          </p>
          <ul
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
              <component :is="skill.icon" class="w-4 h-4 text-neutral-400" />
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </div>
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div
              class="bg-neutral-700/50 backdrop-blur p-4 rounded-xl text-center border border-neutral-600"
            >
              <div class="text-2xl font-bold text-accent-blue">2+</div>
              <div class="text-base text-neutral-400">Years of experience</div>
            </div>
            <div
              class="bg-neutral-700/50 backdrop-blur p-4 rounded-xl text-center border border-neutral-600"
            >
              <div class="text-2xl font-bold text-accent-blue">7</div>
              <div class="text-base text-neutral-400">Live projects</div>
            </div>
          </div>
          <div
            class="bg-neutral-700/50 backdrop-blur p-4 rounded-xl text-center border border-neutral-600"
          >
            <p class="text-lg font-bold text-accent-blue">Coffee-Powered</p>
            <p class="text-base text-neutral-400">3 cups daily</p>
          </div>
          <div
            class="bg-neutral-700/50 backdrop-blur p-4 rounded-xl border border-neutral-600"
          >
            <h4
              class="font-bold text-cyan-400 text-base mb-2 flex items-center gap-2"
            >
              <font-awesome-icon icon="fa-solid fa-star" class="text-base" />
              Why Choose Me
            </h4>
            <ul class="text-sm text-neutral-300 space-y-2 leading-relaxed">
              <li class="flex items-start gap-2">
                <span
                  ><strong>Attention to Detail</strong> – Exactly as intended,
                  with pixel-perfect designs and excellent functionality.</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  ><strong>Performance-Focused</strong> – Develop to deliver a
                  smooth user experience by optimizing speed and
                  efficiency.</span
                >
              </li>
              <li class="flex items-start gap-2">
                <span
                  ><strong>Collaborative & Communicative</strong> – I
                  effectively convey ideas by working closely with clients and
                  designers.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
