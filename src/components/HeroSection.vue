<script setup>
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";
import EdmarkImg from "../assets/images/edmark.jpg";
import CV from "../assets/docs/edmarktuazon-cv.pdf";
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
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3 (SASS)", icon: "fa-brands fa-css3-alt" },
  { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
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
const columns = [skills.slice(0, 5), skills.slice(5, 9), skills.slice(9, 13)];
</script>

<template>
  <section
    id="home"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="py-24 px-8 lg:px-14 2xl:px-0 z-50 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
      ref="targetElHeroContent"
    >
      <h4 class="text-neutral-200 leading-none text-xl">Hey there, I'm</h4>
      <h1
        class="font-bold text-neutral-400 my-4 ml-0 md:-ml-1 leading-none text-[clamp(4.625rem,_4.2802rem_+_1.7241vw,_5.25rem)]"
      >
        Edmark Tuazon
      </h1>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1 space-y-6">
          <div class="col-span-1 xl:col-span-5">
            <p class="text-neutral-200 leading-7 mb-8">
              I build websites using modern frontend technologies and practical,
              hands-on development skills. I have experience developing dynamic
              and responsive websites, creating interactive user interfaces with
              JavaScript, Vue.js, and designing efficient layouts using
              frameworks like Tailwind CSS or Bootstrap.
              <br />
              <br />
              Although my main focus is frontend development, I also handle
              backend work using Express.js, Node.js, PHP and MySQL when a
              project requires it, ensuring proper data management and
              functionality without compromising performance. Additionally, I
              manage version control with Git and GitHub, and handle domain
              registration and web hosting through GoDaddy, Namecheap, and
              Hostinger to ensure smooth website performance and deployment.
            </p>
            <div class="flex flex-row gap-10">
              <ul
                v-for="(column, colIndex) in columns"
                :key="colIndex"
                class="flex-1 space-y-3"
              >
                <li
                  v-for="(skill, index) in column"
                  :key="'skill-' + (colIndex * 5 + index)"
                  class="flex items-center gap-2 text-sm text-neutral-200 leading-7"
                >
                  <font-awesome-icon
                    v-if="typeof skill.icon === 'string'"
                    :icon="skill.icon"
                    class="w-4 h-4 text-neutral-200 whitespace-nowrap sm:whitespace-normal"
                  />
                  <component
                    :is="skill.icon"
                    v-else
                    class="w-4 h-4 text-neutral-200"
                  />
                  <span>{{ skill.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-start space-y-4">
          <div
            class="relative w-full max-w-md mx-auto aspect-square rounded-xl overflow-hidden"
          >
            <img
              :src="EdmarkImg"
              alt="Edmark Tuazon"
              class="w-full h-full md:w-80 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            />
          </div>
          <div class="flex items-center gap-3">
            <div>
              <h3 class="text-center text-neutral-200 mb-3">Connect with Me</h3>
              <div class="flex justify-start items-center gap-3">
                <a :href="instagram" target="_blank">
                  <InstagramIcon class="w-6 h-6 text-neutral-400" />
                </a>
                <a :href="linkedin" target="_blank">
                  <LinkedInIcon class="w-6 h-6 text-neutral-400" />
                </a>
                <a :href="facebook" target="_blank">
                  <FacebookIcon class="w-6 h-6 text-neutral-400" />
                </a>
                <a :href="github" target="_blank">
                  <GitHubIcon class="w-6 h-6 text-neutral-400" />
                </a>
              </div>
            </div>

            <div class="text-center sr-only">
              <a
                :href="CV"
                target="_blank"
                class="inline-block px-5 py-2 bg-neutral-300 text-neutral-900 font-bold rounded-xl hover:shadow-lg transition text-sm"
              >
                Take a peek at my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
