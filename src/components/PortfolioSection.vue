<script setup>
import steelasiaImg from "../assets/images/steelasia.png";
import bayfieldImg from "../assets/images/bayfield.png";
import smbImg from "../assets/images/smb.png";
import home4pawsImg from "../assets/images/home4paws.png";
import spcImg from "../assets/images/spc.png";
import mmImg from "../assets/images/mm.png";
import orImg from "../assets/images/OR-site.png";
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import { reactive, markRaw } from "vue";

const { targetElPortfolio } = useMotionScrollAnim();

const urlText = reactive({
  home4Paws: {
    url: "https://hope4paws.infinityfreeapp.com/",
    title: "Home4Paws",
  },
  majorMilestones: {
    url: "https://majormilestonesupports.com.au/",
    title: "Major Milestones",
  },
  oliviaRodrigo: {
    url: "https://olivia-rodrigo-site-cloned.vercel.app/",
    title: "Olivia Rodrigo",
  },
});

const portfolioSet = [
  {
    title: "Home4Paws",
    year: "10/2025",
    image: home4pawsImg,
    link: "https://hope4paws.infinityfreeapp.com/",
    description: `A freelance web project developed for <a href="${urlText.home4Paws.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.home4Paws.title}</em></a> with Admin CMS access, a pet adoption web application designed to connect animal shelters with potential adopters, allows users to browse adoptable pets, learn their stories, and apply for adoption online.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
      { name: "MySQL", icon: ["fa", "database"] },
    ],
    type: "Freelance Project",
  },
  {
    title: "Steel Asia",
    year: "01/2023",
    image: steelasiaImg,
    link: "https://www.steelasia.com/",
    description:
      "A corporate web project developed for SteelAsia Manufacturing Corporation, the leading steel company in the Philippines. The website highlights the company’s operations, sustainability efforts, and nationwide presence, providing an informative and professional online platform for clients and partners.",
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
    ],
    type: "Corporate Project",
  },
  {
    title: "Bayfield Equipment Corp.",
    year: "10/2022",
    image: bayfieldImg,
    link: "https://www.bayfieldequipment.com/",
    description:
      "A corporate web project developed for Bayfield Equipment Corporation (BEC), the national dealer of Wirtgen Group products in the Philippines. The website showcases BEC’s product lineup, brand partnerships, and nationwide reach, highlighting its role in delivering premium construction solutions.",
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
    ],
    type: "Corporate Project",
  },
  {
    title: "She Means Business",
    year: "07/2022",
    image: smbImg,
    link: "https://shemeansbusiness.net.au/",
    description:
      "A corporate web project developed for She Means Business, an Australian full-service marketing agency passionate about driving growth and results for its clients. The site emphasizes brand storytelling, service clarity, and a results-driven approach.",
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
    ],
    type: "Corporate Project",
  },
  {
    title: "Major Milestones",
    year: "03/2025",
    image: mmImg,
    link: "https://majormilestonesupports.com.au/",
    description: `A corporate web project developed for <a href="${urlText.majorMilestones.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.majorMilestones.title}</em></a> Supports with Admin
       CMS access, a web application trusted Australian provider offering disability support and community care services. The project focused on clear communication, inclusivity, 
       and easy navigation for users seeking essential care information.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
      { name: "MySQL", icon: ["fa", "database"] },
    ],
    type: "Freelance Project",
  },
  {
    title: "Satrap Power Corporation (SPC)",
    year: "10/2025",
    image: spcImg,
    link: "https://satrap-power-corporation.vercel.app/",
    description:
      "A personal web project developed for Satrap Power Corporation using latest Vue.js, a renewable energy company under the LCS Group. The site highlights SPC’s mission, sustainable energy projects, and commitment to empowering local communities.",
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
    ],
    type: "Freelance Corporate Project",
  },
  {
    title: "Olivia Rodrigo Site",
    year: "08/2022",
    image: orImg,
    link: "https://olivia-rodrigo-site-cloned.vercel.app/",
    description: `A practice personal web application project replicating the official <a href="${urlText.oliviaRodrigo.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.oliviaRodrigo.title}</em></a> Store website. Built to improve frontend skill specially Vue.js.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
    ],
    type: "Personal Project",
  },
].sort((currentItem, nextItem) => {
  const [currentMonth, currentYear] = currentItem.year.split("/").map(Number);
  const [nextMonth, nextYear] = nextItem.year.split("/").map(Number);
  return nextYear - currentYear || nextMonth - currentMonth;
});

const formatDescription = (description) => {
  return description;
};
</script>

<template>
  <section
    id="portfolio"
    ref="portfolioSection"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="px-8 lg:px-14 2xl:px-0 w-full z-50 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="flex justify-start items-center mb-12 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          Projects that I've Built
        </h3>
      </div>

      <div ref="targetElPortfolio">
        <div
          v-for="(portfolio, index) in portfolioSet"
          :key="index"
          class="mb-12"
        >
          <div class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div class="col-span-1 xl:col-span-2 md:row-end-1 row-end-auto">
              <span class="text-accent-blue text-sm"
                >{{ portfolio.type }} - {{ portfolio.year }}</span
              >
              <h4 class="text-4xl font-bold mt-2 text-neutral-400">
                {{ portfolio.title }}
              </h4>
              <p
                class="text-neutral-200 mt-4"
                v-html="formatDescription(portfolio.description)"
              ></p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="(tech, index) in portfolio.techStack"
                  :key="index"
                  class="text-sm bg-neutral-600 text-neutral-200 px-2 py-1 rounded flex items-center gap-1"
                >
                  <font-awesome-icon
                    v-if="Array.isArray(tech.icon)"
                    :icon="tech.icon"
                    class="w-4 h-4 text-neutral-200"
                  />
                  <component
                    :is="tech.icon"
                    v-else
                    class="w-4 h-4 text-accent-blue"
                  />

                  {{ tech.name }}
                </span>
              </div>
            </div>

            <div class="w-full h-full col-span-1 xl:col-span-6 grid row-end-1">
              <a
                :href="
                  portfolio.type !== 'Corporate Project' &&
                  portfolio.type !== 'Freelance Corporate Project'
                    ? portfolio.link
                    : null
                "
                :class="
                  portfolio.type === 'Corporate Project' ||
                  portfolio.type === 'Freelance Corporate Project'
                    ? 'pointer-events-none opacity-70 cursor-not-allowed'
                    : 'group block overflow-hidden relative'
                "
                target="_blank"
                rel="noopener"
              >
                <img
                  :src="portfolio.image"
                  :alt="portfolio.title"
                  class="w-full h-full object-contain transform transition-transform duration-300"
                  :class="
                    portfolio.type !== 'Corporate Project' &&
                    portfolio.type !== 'Freelance Corporate Project'
                      ? 'group-hover:scale-105'
                      : ''
                  "
                />
                <div
                  class="absolute inset-0 bg-black object-contain bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-lg font-semibold"
                  :class="
                    portfolio.type !== 'Corporate Project' &&
                    portfolio.type !== 'Freelance Corporate Project'
                      ? 'group-hover:opacity-100'
                      : ''
                  "
                >
                  Visit Project
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-up-right-from-square"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
