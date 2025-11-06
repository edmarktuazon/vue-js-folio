<script setup>
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import MarkLabLogo from "../assets/images/company-logo/marklab.png";
import DevEdLogo from "../assets/images/company-logo/deved.png";
import DevelopedByEdLogo from "../assets/images/company-logo/developedbyed.png";
import EvokePlcLogo from "../assets/images/company-logo/evoke.svg";
import TeamholixLogo from "../assets/images/company-logo/teamholix.jpg";
import FiverLogo from "../assets/images/company-logo/fiverr.png";

console.log(DevEdLogo);
console.log(MarkLabLogo);
console.log(DevelopedByEdLogo);

const { targetElWorkExperience } = useMotionScrollAnim();

const workExperiences = [
  {
    period: "Present",
    role: "Frontend Web Developer - Freelance/Part-Time",
    company: "",
    logo: DevelopedByEdLogo,
    description: `Offers freelance website development services, creating responsive 
    and dynamic websites and web systems for various clients. Uses HTML, CSS, 
    Tailwind, and JavaScript, with occasional Vue.js, PHP, and MySQL integration 
    for added functionality and data management. Also accepts commissioned web projects 
    tailored to client goals and design requirements.`,
  },
  {
    period: "10/23/2023 - Present",
    role: "HTML Email Campaign Developer - Full-Time",
    company: "WHG Customer Services Philippines Inc. | evoke plc",
    logo: EvokePlcLogo,
    description: `Create HTML/CSS email templates and manage targeted campaigns
    across the US and international markets using IBM Watson Campaign
    (Silverpop) and Acoustic for implementation and testing. Build and
    deliver site-wide pop-up messages using HTML/CSS via OMG system.`,
  },
  {
    period: "02/2022 - 03/2025",
    role: "Frontend Web Developer - Part-Time",
    company: "Teamholix Communication Design Inc.",
    logo: TeamholixLogo,
    description: `Converted Adobe XD UI/UX designs into fully functional 
    web interfaces using HTML5, CSS3, Tailwind CSS or Bootstrap 4/5, 
    and vanilla JavaScript, with PHP includes for modular structuring. 
    Deployed and maintained the website via FTP, performing UI testing, 
    debugging, and optimization to ensure layout consistency, performance, 
    and overall quality.`,
  },
  {
    period: "02/2022 - 03/2025",
    role: "Frontend Web Developer - Freelance",
    company: "Fiverr & Outside",
    logo: FiverLogo,
    description: `Developed responsive and accessible web pages from UI/UX 
    prototypes using HTML5, CSS3/SASS, Tailwind CSS, and JavaScript, while 
    providing ongoing client support through troubleshooting, refactoring, 
    and enhancements, and configuring domain and hosting environments 
    (Hostinger, GoDaddy, Namecheap) to ensure proper DNS setup and 
    server-side deployment.`,
  },
];
</script>

<template>
  <section id="work" class="bg-neutral-800 py-20 min-h-screen">
    <div
      class="px-8 mx-auto relative lg:px-14 2xl:px-0 w-full z-50 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="flex justify-start items-center mb-16 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          Work Experience
        </h3>
      </div>

      <div class="space-y-12" ref="targetElWorkExperience">
        <div
          v-for="(work, index) in workExperiences"
          :key="index"
          class="flex flex-col md:flex-row gap-2 md:gap-6 rounded-lg hover:bg-neutral-800/50 transition"
        >
          <div
            class="hidden md:flex flex-col w-36 text-sm font-medium text-accent-blue uppercase tracking-wider"
          >
            {{ work.period }}
          </div>
          <div class="hidden md:block w-[2px] bg-neutral-700 mr-6"></div>

          <div v-if="work.logo" class="flex-shrink-0 mb-2 md:mb-0">
            <img
              :src="work.logo"
              :alt="`${work.company} logo`"
              class="h-20 w-[5.25rem] object-fill opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
          <div class="flex-1">
            <h4 class="text-xl font-bold text-neutral-400 leading-tight">
              {{ work.role }}
            </h4>
            <p class="text-neutral-300 font-medium mt-1">{{ work.company }}</p>
            <p class="mt-3 text-neutral-200 leading-relaxed">
              {{ work.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
