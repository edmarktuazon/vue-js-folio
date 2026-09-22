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

const introText = `Experience as a front-end developer specializing in creating
custom static and dynamic websites using my core front-end tech
stack of Tailwind CSS, JavaScript, and Vue.js,
emphasizing usability, performance and responsive design. Expanded into
full-stack development to support client projects requiring
backend functionality, leveraging Node.js, Express.js, Firebase,
Supabase, PHP, and MySQL, along with AI tools (Claude) to
accelerate development. Experienced in server management including
domain setup and deployment (GoDaddy, Namecheap, Hostinger).
Additional background in email campaign development, building and
maintaining legacy HTML email templates, and using marketing tools
such as Acoustic Marketing Cloud for email automation and testing.`;
</script>

<template>
  <section
    id="home"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center relative"
  >
    <div
      class="py-24 px-8 lg:px-14 2xl:px-0 z-50 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
      ref="targetElHeroContent"
    >
      <div class="flex flex-col items-center md:flex-row gap-8">
        <div class="flex-1 space-y-6">
          <h4 class="text-neutral-200 leading-none text-xl">Hey there, I'm</h4>
          <h1
            class="font-bold text-neutral-400 my-4 ml-0 md:-ml-1 leading-none text-[clamp(4.625rem,_4.2802rem_+_1.7241vw,_7.25rem)]"
          >
            Edmark Tuazon.
          </h1>
          <div class="col-span-1 xl:col-span-5">
            <p
              class="text-neutral-200 leading-7 mb-8 text-justify"
              v-html="introText"
            ></p>

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
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition-colors animate-bounce"
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
