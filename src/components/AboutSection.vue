<script setup>
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import { reactive, markRaw, onMounted, ref } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElAboutContent } = useMotionScrollAnim();

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

const counts = ref({
  years: 0,
  projects: 0,
  projectsDelivered: 0,
  clients: 0,
});

const animateCounter = (targetKey, targetValue, duration = 2800) => {
  const startTime = performance.now();
  const animate = (currentTime) => {
    let progress = (currentTime - startTime) / duration;
    if (progress > 1) progress = 1;
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    counts.value[targetKey] = Math.floor(easeProgress * targetValue);
    if (progress < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

onMounted(() => {
  const section = document.getElementById("stats-section");
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounter("years", 2);
        animateCounter("projects", 7);
        animateCounter("projectsDelivered", 73);
        animateCounter("clients", 80);
        observer.unobserve(section);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});
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
        class="flex justify-start items-center mb-12 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          Technologies I work with
        </h3>
      </div>

      <div
        class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-8"
        ref="targetElAboutContent"
      >
        <div class="col-span-1 xl:col-span-5">
          <p class="text-neutral-200 leading-7 mb-8">
            Using modern frontend technologies and hands-on skills, I have
            experience developing dynamic, responsive websites. For efficient UI
            development, I use frameworks like Tailwind CSS and Bootstrap, and I
            manage version control with Git and GitHub. Furthermore, I have
            managed domain registration and web hosting services with GoDaddy,
            Namecheap, and Hostinger, providing smooth website performance and
            deployment.
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

        <div
          id="stats-section"
          class="space-y-6 w-full h-full col-span-1 xl:col-span-3"
        >
          <div class="grid grid-cols-2 gap-5">
            <div
              class="bg-neutral-700/50 backdrop-blur p-6 rounded-xl text-center border border-neutral-600"
            >
              <div class="text-2xl font-bold text-accent-blue mb-2">
                {{ counts.years }}+
              </div>
              <div class="text-neutral-400 uppercase font-medium text-sm">
                Years of Experience
              </div>
            </div>
            <div
              class="bg-neutral-700/50 backdrop-blur p-6 rounded-xl text-center border border-neutral-600"
            >
              <div class="text-2xl font-bold text-accent-blue mb-2">
                {{ counts.projectsDelivered }}
              </div>
              <div class="text-neutral-400 uppercase font-medium text-sm">
                Projects Delivered
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div
              class="bg-neutral-700/50 backdrop-blur p-6 rounded-xl text-center border border-neutral-600"
            >
              <div class="text-2xl font-bold text-accent-blue mb-2">
                {{ counts.projects }}
              </div>
              <div class="text-neutral-400 uppercase font-medium text-sm">
                Live Projects
              </div>
            </div>
            <div
              class="bg-neutral-700/50 backdrop-blur p-6 rounded-xl text-center border border-neutral-600"
            >
              <div class="text-2xl font-bold text-accent-blue mb-2">
                {{ counts.clients }}+
              </div>
              <div class="text-neutral-400 uppercase font-medium text-sm">
                Trusted by Clients
              </div>
            </div>
          </div>
          <div
            class="bg-neutral-700/50 backdrop-blur p-6 rounded-xl border border-neutral-600"
          >
            <h4 class="font-bold text-accent-blue mb-4 flex items-center gap-2">
              Your Goal. My Execution.
            </h4>
            <ul class="text-sm text-neutral-300 space-y-3 leading-relaxed">
              <li class="flex items-start gap-3">
                <span
                  ><strong>Quality-Driven</strong> – Exactly as intended, with
                  well-crafted UI and excellent functionality.</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span
                  ><strong>Smooth UX Development</strong> – I build websites
                  that provide seamless user interactions while maintaining
                  reliable performance.</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span
                  ><strong>Team & Client-Oriented</strong> – I adapt to working
                  with clients alone or alongside designers to ensure projects
                  meet expectations.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
