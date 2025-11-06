<script setup>
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import EvokePlcLogo from "../assets/images/company-logo/evoke.svg";
import TeamholixLogo from "../assets/images/company-logo/teamholix.jpg";
import FiverLogo from "../assets/images/company-logo/fiverr.png";

const { targetElWorkExperience } = useMotionScrollAnim();

const workExperiences = [
  {
    period: "Present",
    role: "Frontend Web Developer - Freelance/Part-Time",
    company: "",
    logo: "",
    description: `Builds responsive, dynamic website, and web system for freelance 
    clients using HTML, CSS, Tailwind, JavaScript, with occasional Vue.js 
    PHP and MySQL integration for dynamic features and data management.`,
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
        class="flex justify-start items-center mb-12 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          Work Experience
        </h3>
      </div>

      <div class="overflow-x-auto z-50" ref="targetElWorkExperience">
        <table class="w-full text-left border-separate border-spacing-y-8">
          <tbody>
            <tr
              v-for="(work, index) in workExperiences"
              :key="index"
              class="align-top transition-all duration-200 hover:bg-neutral-800/50 rounded-lg"
            >
              <td class="w-36 sm:w-48 align-top">
                <time
                  class="text-sm font-medium text-accent-blue uppercase tracking-wider block"
                >
                  {{ work.period }}
                </time>
              </td>

              <td class="border-l-2 border-neutral-700 pl-6 sm:pl-8">
                <div
                  class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-2"
                >
                  <div>
                    <h4
                      class="text-xl font-bold text-neutral-400 leading-tight"
                    >
                      {{ work.role }}
                    </h4>
                    <p class="text-neutral-300 font-medium mt-2">
                      {{ work.company }}
                    </p>
                  </div>
                  <div v-if="work.logo" class="hidden md:block">
                    <img
                      :src="work.logo"
                      :alt="`${work.company} logo`"
                      class="h-16 w-24 object-contain opacity-70 transition-opacity hover:opacity-100"
                    />
                  </div>
                </div>
                <p class="mt-3 text-neutral-200 leading-relaxed max-w-3xl">
                  {{ work.description }}
                </p>
                <div v-if="work.logo" class="hidden mt-4 justify-end">
                  <img
                    :src="work.logo"
                    :alt="`${work.company} logo`"
                    class="h-8 w-auto object-contain opacity-70"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
