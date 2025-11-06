<script setup>
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import MarkLabLogo from "../assets/images/company-logo/marklab.png";
import DevEdLogo from "../assets/images/company-logo/deved.png";
import DevelopedByEdLogo from "../assets/images/company-logo/developedbyed.png";
import EvokePlcLogo from "../assets/images/company-logo/evoke.svg";
import TeamholixLogo from "../assets/images/company-logo/teamholix.jpg";
import QuoteLogo from "../assets/images/company-logo/quote.jfif";
import FiverLogo from "../assets/images/company-logo/fiverr.png";

console.log(DevEdLogo);
console.log(MarkLabLogo);
console.log(DevelopedByEdLogo);

const { targetElWorkExperience } = useMotionScrollAnim();

const workExperiences = [
  {
    period: "March 2025 - Present",
    role: "Frontend Web Developer",
    company: "Freelance/Part-Time/Commission",
    logo: DevelopedByEdLogo,
    description: `I’m offering freelance/part-time, and commission-based website development services, 
    creating responsive and dynamic websites and web systems for various clients. I use HTML, 
    CSS, Tailwind, and JavaScript, with occasional Vue.js, PHP, and MySQL integration for 
    enhanced interactivity and data handling when required by the client or based on project requirements.`,
  },
  {
    period: "October 2023 - Present",
    role: "HTML Email Campaign Developer",
    company: "WHG Customer Services Philippines Inc. | evoke plc  - Full-Time",
    logo: EvokePlcLogo,
    description: `Customize HTML/CSS email templates for targeted campaigns across the US and international 
    markets, using IBM Watson Campaign (Silverpop) and Acoustic for implementation and testing. 
    Additionally, customize and deliver site-wide pop-up messages using HTML/CSS via the in-house Online Message Group (OMG) system.`,
  },
  {
    period: "February 2022 - March 2025",
    role: "Frontend Web Developer",
    company: "Teamholix Communication Design Inc. - Part-Time",
    logo: TeamholixLogo,
    description: `Converted Adobe XD UI/UX designs into fully developed
    web interfaces using HTML5, CSS3, Tailwind CSS or Bootstrap 4/5, 
    and vanilla JavaScript, with PHP includes for modular structuring. Additionally,
    deployed and maintained the website via FTP, performing UI testing, 
    debugging, and optimization to ensure layout consistency, performance, 
    and overall quality.`,
  },
  {
    period: "March 2023 - August 2023",
    role: "Virtual Assistant - Content Editor/Writer",
    company: "Quote.com - Freelance",
    logo: QuoteLogo,
    description: `Managed and updated website content and data, maintaining accuracy in Google Sheets and 
    WordPress for an insurance company. Additionally, optimized on-page SEO elements such as title tags, 
    meta descriptions, and headers, while leveraging AI tools (ChatGPT+) to enhance content creation, 
    SEO performance, and overall workflow efficiency.`,
  },
  {
    period: "February 2022 - March 2023",
    role: "Frontend Web Developer",
    company: "Fiverr & Outside - Freelance",
    logo: FiverLogo,
    description: `Developed responsive and accessible web pages from UI/UX 
    prototypes using HTML5, CSS3/SASS, Tailwind CSS, and JavaScript, while 
    providing ongoing client support through troubleshooting, refactoring, 
    enhancements, configuring domain and hosting environments 
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

      <div ref="targetElWorkExperience">
        <div
          v-for="(work, index) in workExperiences"
          :key="index"
          class="flex flex-col md:flex-row rounded-lg hover:bg-neutral-800/50 transition"
        >
          <!-- <div
            class="hidden md:flex flex-col w-48 text-sm font-medium text-accent-blue uppercase tracking-wider"
          >
            {{ work.period }}
          </div> -->
          <!-- <div class="hidden md:block w-[0.125rem] bg-neutral-700"></div> -->
          <div class="flex flex-col sm:flex-row items-start gap-5 w-full">
            <div v-if="work.logo" class="flex-shrink-0">
              <img
                :src="work.logo"
                :alt="`${work.company} logo`"
                class="h-20 w-[5.25rem] object-fill"
              />
              <!-- <div
                class="block md:hidden text-xs font-medium text-accent-blue uppercase tracking-wider"
              >
                {{ work.period }}
              </div> -->
            </div>
            <div class="flex-1">
              <div class="flex flex-col items-start gap-2">
                <div
                  class="flex flex-col lg:flex-row items-start lg:items-center gap-2"
                >
                  <div
                    class="text-sm text-accent-blue uppercase tracking-wider order-1 lg:order-3"
                  >
                    {{ work.period }}
                  </div>

                  <span
                    class="bg-neutral-200 h-1 w-1 rounded-full hidden lg:block order-2"
                  ></span>

                  <h4
                    class="text-xl font-bold text-neutral-400 leading-tight order-2 lg:order-1"
                  >
                    {{ work.role }}
                  </h4>
                </div>
                <h5 class="text-neutral-300 font-medium">{{ work.company }}</h5>
              </div>

              <p class="mt-3 text-neutral-200 leading-relaxed">
                {{ work.description }}
              </p>
              <div class="my-10" v-if="index !== workExperiences.length - 1">
                <span class="w-full h-[0.0625rem] bg-neutral-900 block"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
