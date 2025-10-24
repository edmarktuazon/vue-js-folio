<!-- eslint-disable prettier/prettier -->
<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";

// USE MOTION PLUGIN
import { reactive, toRefs } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElHeroText } = useMotionScrollAnim();

const links = reactive({
  facebook: "https://www.facebook.com/me.edmarktuazon",
  instagram: "https://www.instagram.com/_edmarktuazon/",
  linkedin: "https://www.linkedin.com/in/edmarktuazon/",
  github: "https://github.com/edmarktuazon",
});

const { facebook, instagram, linkedin, github } = toRefs(links);
</script>

<template>
  <section
    id="home"
    ref="homeSection"
    class="bg-neutral-800 h-screen flex justify-center items-center flex-col"
  >
    <div
      class="z-50 relative px-8 xl:px-14 2xl:px-0 w-full lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div ref="targetElHeroText">
        <h4 class="text-neutral-200 tracking-wide text-xl">Hey, I'm</h4>

        <h1
          class="font-bold text-accent-blue my-4 tracking-wide leading-none text-[clamp(2.75rem,2.0603rem+3.4483vw,4rem)]"
        >
          Edmark Tuazon<br />
          <span class="text-neutral-200">I build things for the web.</span>
        </h1>

        <h3 class="text-neutral-200 tracking-wide text-lg">
          A frontend developer specializing in building responsive interfaces
          <br class="hidden lg:block" />
          and dynamic user experiences for the modern web.
        </h3>
      </div>

      <div class="mt-16">
        <h3 class="text-neutral-200 text-sm mb-2">Let's connect!</h3>

        <div
          class="relative flex justify-start items-center gap-3 w-full after:content-[''] after:block after:w-full after:h-[1px] after:bg-neutral-800 after:absolute after:bottom-[-1rem]"
        >
          <a :href="facebook" target="_blank">
            <FacebookIcon />
          </a>
          <a :href="instagram" target="_blank">
            <InstagramIcon />
          </a>
          <a :href="linkedin" target="_blank">
            <LinkedInIcon />
          </a>
          <a :href="github" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
