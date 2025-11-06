<script setup>
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElContact } = useMotionScrollAnim();
const igLink = "https://www.instagram.com/_edmarktuazon/";
</script>
<template>
  <section
    id="contact"
    ref="contactSection"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="flex justify-center items-center flex-col z-50 relative px-8 lg:px-14"
      ref="targetElContact"
    >
      <h3 class="text-neutral-200 text-3xl font-bold text-center">
        Get in touch
      </h3>
      <h4 class="text-neutral-200 font-normal text-center mt-4">
        Have a project in mind? Let’s discuss how to make it happen.
      </h4>
      <a
        :href="igLink"
        target="_blank"
        class="text-neutral-200 p-2 text-sm rounded-lg w-32 text-center mt-6 border-neutral-200 border hover:bg-neutral-200 hover:text-white transition-colors"
      >
        Say hello&nbsp;&nbsp;<font-awesome-icon
          icon="fa-solid fa-paper-plane"
        />
      </a>
    </div>
  </section>
</template>
