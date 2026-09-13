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
    company:
      "WHG Customer Services Philippines Inc. / evoke plc - Full-Time Hybrid",
    logo: EvokePlcLogo,
    description: `Part of the Marketing Technology team, supporting the development and execution of targeted B2B and B2C marketing campaigns across US and international brands.
 <br /><br />
• Customize and implement legacy HTML and CSS email templates for targeted campaigns across brands, including WSOP, Mr. Green, and 888casino. Deploy the CRM-approved email templates to IBM Watson Campaign (Silverpop)/Acoustic Marketing Cloud for template IDs creation and internal testing.
<br /><br />
• Modify site-wide HTML and CSS web based pop-up message for WSOP, and Mr. Green brand website. Powered by the in-house Online Message Group (OMG) system. Configure the CRM-approved OMG template into the OMG system to generate unique template IDs.
<br /><br />
• Create SMS and Push notifications content for WSOP, Mr. Green, and 888casino. Implement the CRM-approved SMS and Push using the in-house UCC Admin system to set up the sending name, language, message body, and ID generation.`,
  },
  {
    period: "January 2026 - July 2026",
    role: "WordPress & Wix Developer (Support)",
    company: "Link Helpers SEO & Web Design Phoenix - Freelance Remote",
    logo: LinkHelpers,
    description: `
    Supporting the Web, SEO team and Owner & Chief Strategist by maintaining, troubleshooting, and optimizing existing websites.
<br /><br />
• Perform website maintenance for WordPress and Wix websites, including content, image, and layout updates; conduct website performance audits using Google PageSpeed Insights and troubleshoot front-end issues to maintain site functionality and performance.`,
  },
  {
    period: "February 2022 - March 2025",
    role: "Frontend Web Developer",
    company: "Teamholix Communication Design Inc. - Contract Remote",
    logo: TeamholixLogo,
    description: `Work closely with the Owner and Web Designer team to develop responsive and production-ready web interfaces by translating UI/UX designs into functional websites, followed by deployment, testing, debugging, and performance optimization.
<br /><br />
• Convert Adobe XD UI/UX designs into fully functional web interfaces using HTML5, CSS3, Tailwind CSS/Bootstrap5, and vanilla JavaScript, with PHP includes for modular website structuring.
<br /><br />
• Deploy and maintain websites via FTP, performing UI testing, debugging, and optimization to ensure layout consistency, performance, responsiveness, and overall quality.`,
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
