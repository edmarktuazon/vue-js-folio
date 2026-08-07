<script setup>
import { useMotionScrollAnim } from "@/composables/useMotion.js";
import EvokePlcLogo from "../assets/images/company-logo/evoke.svg";
import TeamholixLogo from "../assets/images/company-logo/teamholix.jpg";
import LinkHelpers from "../assets/images/company-logo/linkhelpers.jfif";

const { targetElWorkExperience } = useMotionScrollAnim();

const workExperiences = [
  {
    period: "October 2023 - Present",
    role: "HTML Email Campaign Developer",
    company: "WHG Customer Services Philippines Inc. | evoke plc  - Full-Time",
    logo: EvokePlcLogo,
    description: `Customize HTML and CSS email templates for targeted campaigns across the US and international 
    markets, using IBM Watson Campaign (Silverpop) and Acoustic for implementation and testing. 
    Additionally, customize and deliver site-wide pop-up messages using HTML and CSS via the in-house Online Message Group (OMG) system.`,
  },
  {
    period: "January 2026 - July 2026",
    role: "WordPress & Wix Developer (Support)",
    company: "Link Helpers SEO & Web Design Phoenix - Freelance",
    logo: LinkHelpers,
    description: `Performed website maintenance for WordPress and Wix websites, including content, image, and layout updates, conduct website performance audits using Google PageSpeed Insights, and troubleshot front-end issues to maintain website functionality and performance.`,
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
];
</script>

<template>
  <section
    id="work"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
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
                    v-html="work.period"
                  ></div>
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

              <p
                class="mt-3 text-neutral-200 leading-relaxed text-justify"
                v-html="work.description"
              ></p>
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
