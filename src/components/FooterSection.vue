<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import FacebookIcon from "../components/icons/IconFacebook.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import InstagramIcon from "../components/icons/IconInstagram.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";

import { ref, toRefs, reactive } from "vue";

const currentYear = ref(new Date().getFullYear());

const links = reactive({
  facebook: "https://www.facebook.com/me.edmarktuazon",
  instagram: "https://www.instagram.com/_edmarktuazon/",
  linkedin: "https://www.linkedin.com/in/edmarktuazon/",
  github: "https://github.com/edmarktuazon",
});

const { facebook, instagram, linkedin, github } = toRefs(links);
</script>
<template>
  <footer class="bg-neutral-900 p-6 z-50 relative px-8 xl:px-36">
    <div
      class="flex gap-4 lg:gap-0 items-center justify-between lg:flex-row flex-col-reverse"
    >
      <p class="text-center text-neutral-200">
        Copyright &copy;{{ currentYear }} Edmark Tuazon. All rights reserved.
      </p>
      <div class="flex justify-center items-center gap-3">
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
  </footer>
</template>
