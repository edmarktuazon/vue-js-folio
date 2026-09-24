<script setup>
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";
import EdmarkImg from "../assets/images/edmark.jpg";
import CV from "../assets/docs/Edmark_Tuazon_CV.pdf";
import { reactive, toRefs, markRaw } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElHeroContent } = useMotionScrollAnim();

const links = reactive({
  facebook: "https://www.facebook.com/me.edmarktuazon",
  instagram: "https://www.instagram.com/_edmarktuazon/",
  linkedin: "https://www.linkedin.com/in/edmarktuazon/",
  github: "https://github.com/edmarktuazon",
});

const { facebook, instagram, linkedin, github } = toRefs(links);

const skills = reactive([
  { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
  { name: "Vue.js", icon: "fa-brands fa-vuejs" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "Node.js, Express.js", icon: "fa-brands fa-node-js" },
  { name: "PHP", icon: "fa-brands fa-php" },
  { name: "Firebase/Supabase/MySQL", icon: "fa-solid fa-database" },
  { name: "GoDaddy", icon: "fa-solid fa-globe" },
  { name: "Hostinger", icon: "fa-solid fa-server" },
  { name: "Namecheap", icon: "fa-solid fa-cloud" },
]);
const columns = [skills.slice(0, 3), skills.slice(3, 6), skills.slice(6, 9)];

const introText = `
Front-end development is my primary area of expertise, while I also work with back-end technologies when project requirements call for full-stack functionality. 
Here are the back-end technologies I work with. These include Node.js, Express.js, Firebase, Supabase, PHP, and MySQL, with AI tools such as Claude helping accelerate development. 
I also handle domain setup and website deployment using GoDaddy, Namecheap, and Hostinger.
<br />
<br />
I also have additional experience in email campaign development involving legacy HTML email templates and email marketing platforms such as Acoustic Marketing Cloud for automation and testing.`;
</script>

<template>
  <section
    id="home"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center relative"
  >
    <div
      class="py-24 px-4 md:px-8 lg:px-14 2xl:px-0 z-50 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
      ref="targetElHeroContent"
    >
      <div class="w-full md:w-[55%] lg:w-[62%]">
        <h4 class="pb-2 text-neutral-200 leading-none text-lg">
          Hey there, I'm
        </h4>
        <h1
          class="font-bold text-neutral-400 text-[2.6875rem] leading-none sm:text-6xl md:text-[2.875rem] lg:text-7xl"
        >
          Edmark Tuazon.
          <span class="pt-2 text-neutral-200 font-normal block text-lg"
            >Experience as a website developer specializing in creating custom
            static and dynamic websites, with a focus on usability, performance,
            and responsive design.</span
          >
        </h1>
        <div class="flex items-center gap-x-4 my-4 w-full">
          <span class="font-semibold text-2xl text-neutral-200"
            >Technologies I work with across projects:</span
          >
          <div
            class="flex-1 h-[0.0625rem] bg-neutral-600 hidden sm:block"
          ></div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-12">
        <div class="flex-1">
          <div class="col-span-1 xl:col-span-5">
            <p class="text-neutral-200 leading-7 mb-8" v-html="introText"></p>

            <!-- CV Download Button -->
            <a
              :href="CV"
              target="_blank"
              class="sr-only inline-flex items-center gap-2 px-6 py-3 bg-neutral-300 text-neutral-900 font-bold rounded-xl hover:bg-neutral-100 hover:shadow-lg transition-all active:scale-95"
            >
              Take a peek at my CV
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="w-4 h-4"
              />
            </a>

            <!-- Tech stack + icon -->
            <div class="grid grid-cols-3 gap-4 md:gap-2">
              <ul
                v-for="(column, colIndex) in columns"
                :key="colIndex"
                class="space-y-3 min-w-0"
              >
                <li
                  v-for="(skill, index) in column"
                  :key="'skill-' + (colIndex * 5 + index)"
                  class="flex items-start gap-2 text-sm text-neutral-200 leading-7 min-w-0"
                >
                  <font-awesome-icon
                    v-if="typeof skill.icon === 'string'"
                    :icon="skill.icon"
                    class="w-4 h-4 text-neutral-200 shrink-0 mt-1"
                  />
                  <component
                    :is="skill.icon"
                    v-else
                    class="w-4 h-4 text-neutral-200 shrink-0 mt-1"
                  />
                  <span class="break-words">{{ skill.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-start space-y-4">
          <div class="relative w-full max-w-md mx-auto">
            <img
              :src="EdmarkImg"
              alt="Edmark Tuazon"
              class="w-full h-full md:w-80 md:h-80 object-cover rounded-xl"
            />
          </div>
          <div class="flex items-center gap-3">
            <div>
              <h3 class="text-center text-neutral-200 mb-3">Connect with Me</h3>
              <div class="flex justify-start items-center gap-4">
                <a
                  :href="instagram"
                  target="_blank"
                  class="transition-transform duration-200 hover:scale-110"
                >
                  <InstagramIcon class="w-6 h-6 text-neutral-400" />
                </a>
                <a
                  :href="facebook"
                  target="_blank"
                  class="transition-transform duration-200 hover:scale-110"
                >
                  <FacebookIcon class="w-6 h-6 text-neutral-400" />
                </a>
                <a
                  :href="linkedin"
                  target="_blank"
                  class="transition-transform duration-200 hover:scale-110"
                >
                  <LinkedInIcon class="w-6 h-6 text-neutral-400" />
                </a>

                <a
                  :href="github"
                  target="_blank"
                  class="transition-transform duration-200 hover:scale-110"
                >
                  <GitHubIcon class="w-6 h-6 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a
      href="#portfolios"
      class="sr-only absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition-colors animate-bounce"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-7 h-7"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </a>
  </section>
</template>
