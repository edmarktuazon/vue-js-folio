<script setup>
import bmg from "../assets/images/bmg-login.png";
import steelasiaImg from "../assets/images/steelasia.png";
import bayfieldImg from "../assets/images/bayfield.png";
import smbImg from "../assets/images/smb.png";
import akobakwitImg from "../assets/images/akobakwit.png";
import spcImg from "../assets/images/spc.png";
import mmImg from "../assets/images/mm.png";
import orImg from "../assets/images/OR-site.png";
import TailwindCSSIcon from "../components/icons/IconTailwindCSS.vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import { reactive, markRaw } from "vue";

const { targetElPortfolios } = useMotionScrollAnim();

const urlText = reactive({
  akobakwit: {
    url: "https://akobakwit.com/",
    title: "Ako Bakwit",
  },
  Bmg: {
    url: "https://bringmegame.com/",
    title: "Bring Me Game",
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
    title: "Ako Bakwit",
    year: "July 2026",
    image: akobakwitImg,
    link: "https://akobakwit.com/",
    description: `A freelance web project for
    <a href="${urlText.akobakwit.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.akobakwit.title}</em></a>,
    a non-governmental organization (NGO) and advocacy group focused on promoting the rights and welfare of internally displaced persons (IDPs) in the Philippines. The organization’s modern website was built using Vue.js and Supabase, featuring a custom admin dashboard for managing website content and blog posts. I developed the frontend, integrated Supabase for database and backend functionality, and implemented the admin interface, enabling the team to efficiently create, edit, publish, and manage articles through a centralized content management system.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
      { name: "Supabase", icon: ["fa", "database"] },
    ],
    type: "Freelance Project",
  },
  {
    title: "Bring Me Game",
    year: "December 2025",
    image: bmg,
    link: "https://bringmegame.com/",
    description: `A freelance web project for <a href="${urlText.Bmg.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.Bmg.title}</em></a>, 
    a simple gaming platform that highlights one of the Philippines' most popular games. Players can enter 
    their Instagram username to join and have a chance to win exciting prizes. The Admin contacts the selected winners based on the fastest submissions. 
    The platform includes an Admin panel that allows for entering game prompts, viewing winners and participants, and managing photos submitted by users.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
      { name: "Firebase", icon: ["fa", "database"] },
    ],
    type: "Freelance Project",
  },
  {
    title: "Satrap Power Corporation (SPC)",
    year: "October 2025",
    image: spcImg,
    description: `A freelance corporate web project for Satrap Power Corporation, built using the latest Vue.js to deliver a modern, responsive, and maintainable web application.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
    ],
    type: "Freelance Corporate Project",
  },
  {
    title: "Major Milestones",
    year: "March 2025",
    image: mmImg,
    link: "https://majormilestonesupports.com.au/",
    description: `A freelance web project for
    <a href="${urlText.majorMilestones.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.majorMilestones.title}</em></a>
    featuring an Admin CMS-powered web application designed to connect users with the support services they need. The platform allows easy
    browsing of available programs, seamless interaction with the team, and efficient submission of requests, all with an intuitive and accessible interface.`,
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
    year: "January 2023",
    image: steelasiaImg,
    link: "https://www.steelasia.com/",
    description: `A corporate web project for SteelAsia Manufacturing Corporation, highlighting the
    company’s operations, sustainability initiatives, and nationwide presence.
    The website provides users with an informative platform to explore products, learn about services,
    and stay updated on company news and initiatives.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
    ],
    type: "Corporate Project",
  },
  {
    title: "Bayfield Equipment Corp.",
    year: "October 2022",
    image: bayfieldImg,
    description: `A corporate web project for Bayfield Equipment Corporation (BEC), the national dealer of Wirtgen Group
    products in the Philippines. The website allows users to explore BEC’s product lineup, learn about brand partnerships,
    and access information on services and nationwide locations, providing an informative platform for clients and partners.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
    ],
    type: "Corporate Project",
  },
  {
    title: "Olivia Rodrigo Site",
    year: "August 2022",
    image: orImg,
    link: "https://olivia-rodrigo-site-cloned.vercel.app/",
    description: `A practice personal web application project replicating the official <a href="${urlText.oliviaRodrigo.url}" target="_blank" class="text-neutral-200 underline"><em>${urlText.oliviaRodrigo.title}</em></a> Store website. Built to improve frontend skill specially Vue.js.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
    ],
    type: "Personal Project",
  },
  {
    title: "She Means Business",
    year: "July 2022",
    image: smbImg,
    description: `A corporate web project for She Means Business, an Australian marketing agency. The website allows
    users to explore services, learn about the team, view case studies, and understand the agency’s results-driven
    approach through clear and engaging content.`,
    techStack: [
      { name: "Tailwind CSS", icon: markRaw(TailwindCSSIcon) },
      { name: "JavaScript", icon: ["fab", "js"] },
      { name: "PHP", icon: ["fab", "php"] },
    ],
    type: "Corporate Project",
  },
];

const formatDescription = (description) => {
  return description;
};
</script>

<template>
  <section
    id="portfolios"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="px-8 lg:px-14 2xl:px-0 w-full z-50 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="flex justify-start items-center mb-16 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          Featured Projects that I've built
        </h3>
      </div>

      <div ref="targetElPortfolios">
        <div
          v-for="(portfolio, index) in portfolioSet"
          :key="index"
          class="mb-12"
        >
          <div class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div class="col-span-1 xl:col-span-2 md:row-end-1 row-end-auto">
              <span class="text-accent-blue uppercase text-xs tracking-wider"
                >{{ portfolio.type }} - {{ portfolio.year }}</span
              >
              <h4 class="text-3xl font-bold mt-2 text-neutral-400">
                {{ portfolio.title }}
              </h4>
              <p
                class="text-neutral-200 mt-4 text-justify"
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
