<template>
  <section
    class="bg-neutral-800 min-h-screen flex flex-col items-center justify-center px-6 py-20"
  >
    <div class="flex justify-center flex-col items-center z-50">
      <h1
        class="font-bold text-neutral-400 my-4 ml-0 md:-ml-1 leading-none text-[clamp(4.625rem,_4.2802rem_+_1.7241vw,_5.25rem)]"
      >
        404
      </h1>

      <h2 class="text-neutral-400 text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p class="text-gray-500 max-w-md mb-8">
        The page you're looking for might have been removed and not existing, or
        you may have entered the wrong link.
      </p>

      <router-link
        to="/"
        class="bg-neutral-400 hover:bg-neutral-300 text-neutral-900 font-semibold px-6 py-2.5 rounded-xl transition-all active:scale-95"
      >
        Back to Home
      </router-link>
    </div>
  </section>
</template>
