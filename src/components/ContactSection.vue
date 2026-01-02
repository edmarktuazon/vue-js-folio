<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useMotionScrollAnim } from "@/composables/useMotion.js";

const { targetElContact } = useMotionScrollAnim();

const formData = ref({
  name: "",
  email: "",
  message: "",
  type: "quote",
  honeypot: "",
});
const isSubmitting = ref(false);
const submitMessage = ref("");
let timeoutId = null;
const submitTime = ref(0);

const setFormType = (type) => {
  formData.value.type = type;
  const name = formData.value.name.trim();
  const closing = name ? `\n\nThanks,\n${name}` : "\n\nThanks!";

  formData.value.message =
    type === "quote"
      ? `Hi Edmark! 

I’d like to request a project quotation. Here are the details:

Project Type:
Key Features:
Budget (Optional):

Looking forward to your estimate!${closing}`
      : `Hi Edmark!

I have an exciting project idea that I’d love to bring to life with your expertise. Here are the details:

Goal:
Key Features:
Tech (Optional):
Budget (Optional):

Looking forward to discussing the next steps!${closing}`;
};

onMounted(() => {
  submitTime.value = Date.now();
  setFormType("quote");
});

const submitForm = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  if (formData.value.honeypot) {
    submitMessage.value = "Spam detected. Please try again.";
    isSubmitting.value = false;
    return;
  }
  if (Date.now() - submitTime.value < 3000) {
    submitMessage.value = "Please take a moment to fill out the form.";
    isSubmitting.value = false;
    return;
  }

  const API_URL = import.meta.env.PROD
    ? "https://deved-api.onrender.com"
    : "http://localhost:5000";

  try {
    const res = await fetch(`${API_URL}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData.value),
    });
    const data = await res.json();

    if (data.success) {
      submitMessage.value =
        "Got your message! I’ll get back to you at the earliest opportunity.";
      formData.value = {
        name: "",
        email: "",
        message: "",
        type: "quote",
        honeypot: "",
      };
      setFormType("quote");
      timeoutId = setTimeout(() => (submitMessage.value = ""), 6000);
    } else {
      submitMessage.value =
        data.message || "Failed to send. Please try again later.";
    }
  } catch (err) {
    console.error("Frontend fetch error:", err);
    submitMessage.value =
      "Network error. Please check your connection and try again.";
  } finally {
    isSubmitting.value = false;
  }
};

onUnmounted(() => timeoutId && clearTimeout(timeoutId));
</script>

<template>
  <section
    id="contact"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="px-8 lg:px-14 2xl:px-0 w-full z-50 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
      ref="targetElContact"
    >
      <div class="bg-neutral-900 p-8 md:p-12 rounded-xl">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold text-neutral-200 tracking-tight"
          >
            Let’s Shape the Web Together
          </h2>
          <p class="mt-3 text-neutral-400 text-lg max-w-2xl mx-auto">
            Whether you need a quote or want to kick off a project. Let's talk.
            I’m all ears.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          <div class="space-y-4">
            <p class="text-neutral-400 text-sm">
              <strong v-if="formData.type === 'quote'"
                >Need a speedy estimate?</strong
              >
              <strong v-else>Have a project in mind?</strong>
              {{
                formData.type === "quote"
                  ? "I’ll review your requirements and deliver a full, no-pressure quote within a day."
                  : "Let’s refine your concept, pick the right tools, and build a step-by-step plan."
              }}
            </p>
            <div
              class="flex p-2 gap-2 bg-neutral-800 rounded-xl w-full max-w-md"
            >
              <button
                @click="setFormType('quote')"
                class="hover:bg-neutral-300 hover:text-neutral-900 transition"
                :class="[
                  'flex-1 py-3 px-5 rounded-lg font-bold',
                  formData.type === 'quote'
                    ? 'bg-neutral-400 text-neutral-900 shadow-lg'
                    : 'text-neutral-200',
                ]"
                aria-pressed="formData.type === 'quote'"
              >
                Get a Quote
              </button>
              <button
                @click="setFormType('project')"
                class="hover:bg-neutral-300 hover:text-neutral-900 transition"
                :class="[
                  'flex-1 py-3 px-5 rounded-lg font-bold',
                  formData.type === 'project'
                    ? 'bg-neutral-400  text-neutral-900 shadow-lg'
                    : 'text-neutral-200',
                ]"
                aria-pressed="formData.type === 'project'"
              >
                Start a Project
              </button>
            </div>
            <div>
              <a
                href="mailto:edmarktuazon03@gmail.com"
                class="text-neutral-400 underline text-sm"
              >
                Or email me directly
              </a>
            </div>
          </div>

          <form
            @submit.prevent="submitForm"
            class="space-y-6 bg-neutral-800 p-5 md:p-8 rounded-2xl border border-neutral-700"
          >
            <input
              v-model="formData.honeypot"
              type="text"
              class="hidden"
              aria-hidden="true"
            />

            <div>
              <label
                for="name"
                class="block text-sm font-medium text-neutral-400 mb-2"
                >Your Name</label
              >
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-xl text-neutral-300 placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition"
                placeholder="e.g., Jane Doe"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-neutral-400 mb-2"
                >Email Address</label
              >
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-xl text-neutral-300 placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition"
                placeholder="janedoe@gmail.com"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-neutral-300 mb-2"
              >
                {{
                  formData.type === "quote" ? "Project Details" : "Your Idea"
                }}
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="10"
                :disabled="isSubmitting"
                class="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 rounded-xl text-neutral-400 placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition"
                :placeholder="
                  formData.type === 'quote'
                    ? 'Briefly describe your project, timeline, and budget range...'
                    : 'What’s your goal? Any must-have features or tech in mind?'
                "
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 bg-neutral-400 hover:bg-neutral-300 text-neutral-900 font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-400/50 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
            >
              <span v-if="isSubmitting" class="flex gap-2 items-center">
                <svg
                  class="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Sending...
              </span>
              <span v-else>
                {{
                  formData.type === "quote"
                    ? "Request Free Quote"
                    : "Send Project Idea"
                }}
              </span>
            </button>

            <transition name="slide-fade">
              <div
                v-if="submitMessage"
                :class="[
                  'p-4 rounded-xl text-sm font-medium text-center border',
                  submitMessage.includes('Got your message') ||
                  submitMessage.includes('earliest')
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-red-500/10 text-red-400 border-red-500/30',
                ]"
              >
                {{ submitMessage }}
              </div>
            </transition>

            <p class="text-xs text-neutral-400 text-center mt-6">
              Your information is secure and never shared.
              <router-link
                to="/privacy-policy"
                class="underline hover:text-neutral-300 transition"
              >
                Privacy Policy
              </router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
