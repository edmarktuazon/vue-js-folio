<script setup>
const igLink = "https://www.instagram.com/_edmarktuazon/";
</script>
<template>
  <section
    id="contact"
    ref="contactSection"
    class="bg-neutral-800 min-h-[50vh] py-24"
  >
    <div
      class="flex justify-center items-center flex-col z-50 relative px-8 xl:px-14 2xl:px-0"
    >
      <h3 class="text-neutral-200 text-3xl font-bold text-center">
        Get in touch
      </h3>
      <h4 class="text-neutral-200 text-lg font-normal text-center mt-4">
        Have a project in mind? Let's talk!
      </h4>
      <a
        :href="igLink"
        target="_blank"
        class="text-neutral-200 p-2 text-sm rounded-lg w-32 text-center mt-6 border-neutral-200 border hover:bg-neutral-200 hover:text-white"
      >
        Say hello&nbsp;&nbsp;<font-awesome-icon
          icon="fa-solid fa-paper-plane"
        />
      </a>
    </div>
  </section>
</template>
