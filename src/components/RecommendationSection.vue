<script setup>
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElRecommendationContent } = useMotionScrollAnim();

const recommendations = [
  {
    name: "Nazh-Far Mariwa Berganio",
    position:
      "Land Acquisition Manager I Development Worker I President and Founder of Ako Bakwit, Inc. | IDP Rights Advocate I Political Officer | Entrepreneur | JCI Senator #84363",
    text: `I had the pleasure of working with Edmark on the creation of Ako Bakwit’s website, and I can’t recommend him enough.
    <br /><br />
He brought our vision to life — a platform that gives voice to bakwits and champions IDP rights. He was incredibly patient, creative, and committed, even with our tight timeline and limited resources as a grassroots organization.
<br /><br />
If you need someone who is not only good at what he does, but also believes in the cause he’s working on — Edmark is that person.`,
    source: "linkedin",
    link: "https://www.linkedin.com/in/edmarktuazon/details/recommendations/",
  },
  {
    name: "Chris Mendoza",
    position: "Client — Bring Me Game, Melbourne, Victoria, Australia",
    text: `Thank you so much for your hard work to fulfilling my vision of the Bring Me Game website. Your dedication to your coding craft is second to none and I am definitely saving your details to make improvements to the website down the track.
<br /><br />
I’m so glad that I found your ad, you have fast tracked this project of mine by months!! 
<br /><br />
I know the subject says “Project Completed..” but I feel our business relationship has just begun.
<br /><br />
You will hear from me soon!! `,
    source: "email",
    link: null,
  },
];

const getInitials = (name) => {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};
</script>

<template>
  <section id="recommendations" class="bg-neutral-800 py-24 scroll-mt-24">
    <div
      class="mx-auto px-4 md:px-8 lg:px-14 2xl:px-0 w-full xl:max-w-[80%] 2xl:max-w-[60%] z-50 relative"
    >
      <div
        class="flex justify-start items-center mb-12 lg:mb-16 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-3xl md:text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          What people say about working with me
        </h3>
      </div>

      <!-- Recommendation Cards -->
      <div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          ref="targetElRecommendationContent"
        >
          <div
            v-for="rec in recommendations"
            :key="rec.name"
            class="relative p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/80 transition-all duration-300 flex flex-col overflow-hidden group h-full"
          >
            <svg
              class="w-12 h-12 text-neutral-400 mb-4 relative z-10 shrink-0"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
              />
            </svg>

            <p
              class="text-neutral-200 italic leading-relaxed mb-6 relative z-10 min-h-[220px] md:min-h-[260px] flex-grow"
              v-html="rec.text"
            ></p>

            <div
              class="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-neutral-700 relative z-10"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="shrink-0 w-11 h-11 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-200 font-semibold text-sm"
                >
                  {{ getInitials(rec.name) }}
                </div>
                <!-- General note -->
                <!-- Fixed min-height so the footer block is consistent no matter how long the position text is -->
                <div
                  class="min-w-0 min-h-[90px] sm:min-h-[96px] flex flex-col justify-center"
                >
                  <p class="text-neutral-100 font-semibold">
                    {{ rec.name }}
                  </p>
                  <p class="text-neutral-400 text-sm leading-snug">
                    {{ rec.position }}
                  </p>
                </div>
              </div>

              <a
                v-if="rec.source === 'linkedin'"
                :href="rec.link"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-400 hover:bg-neutral-300 text-neutral-900 transition-all active:scale-95"
                title="View on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z"
                  />
                </svg>
              </a>

              <div
                v-else-if="rec.source === 'email'"
                class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-700 text-neutral-400"
                title="Sent via Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 h-5"
                >
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
