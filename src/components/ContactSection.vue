<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
  type: "quote",
  honeypot: "", // ← Anti-spam trap
});

const isSubmitting = ref(false);
const submitMessage = ref("");
let timeoutId = null;
const submitTime = ref(0);

const setFormType = (type) => {
  formData.value.type = type;
  formData.value.message =
    type === "quote"
      ? "Hi Edmark! I'd like a quote for a web development project. Here's a brief overview:\n\n• Project type: \n• Timeline: \n• Budget range: \n\nLooking forward to your thoughts!"
      : "Hi Edmark! I came across your portfolio and would love to discuss a potential project. Here’s a quick summary:\n\n• Idea: \n• Goals: \n• Tech preference (if any): \n\nLet’s hop on a call when you're free!";
};

onMounted(() => {
  submitTime.value = Date.now();
});

const submitForm = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  // === SPAM PROTECTION ===
  if (formData.value.honeypot !== "") {
    submitMessage.value = "Spam detected.";
    isSubmitting.value = false;
    return;
  }

  if (Date.now() - submitTime.value < 3000) {
    submitMessage.value = "Please take a moment to fill the form.";
    isSubmitting.value = false;
    return;
  }

  try {
    const baseURL =
      import.meta.env.MODE === "development"
        ? "http://localhost:5000"
        : "https://deved-backend.onrender.com";

    const response = await fetch(`${baseURL}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
        type: formData.value.type,
      }),
    });

    const result = await response.json();

    if (result.success) {
      submitMessage.value =
        result.message ||
        "Thanks for reaching out and your message was successfully sent!";

      formData.value = {
        name: "",
        email: "",
        message: "",
        type: "quote",
        honeypot: "",
      };
      setFormType("quote");

      timeoutId = setTimeout(() => {
        submitMessage.value = "";
      }, 4000);
    } else {
      submitMessage.value =
        result.message || "Something went wrong. Please try again";
    }
  } catch (error) {
    submitMessage.value = "Connection error. Try again.";
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>

<template>
  <section
    id="contact"
    class="bg-neutral-800 py-24 min-h-screen grid place-items-center"
  >
    <div
      class="px-8 lg:px-14 2xl:px-0 w-full z-50 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div class="bg-neutral-900/70 border border-none rounded-3xl p-8 md:p-12">
        <div class="text-center mb-12 md:mb-24">
          <h3
            class="text-neutral-400 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
          >
            Ready to Build with You
          </h3>
          <p class="text-neutral-200 mt-3 text-lg">
            Have a project in mind? Let's talk. I'm all ears.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div class="space-y-4">
            <div class="text-center md:text-left">
              <p class="text-neutral-200 text-sm leading-relaxed">
                {{
                  formData.type === "quote"
                    ? "Tell me about your project. I’ll get back with a detailed quote."
                    : "Drop a quick message. I usually reply within a few hours."
                }}
              </p>
            </div>
            <button
              @click="setFormType('quote')"
              :class="[
                'w-full group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg',
                formData.type === 'quote'
                  ? 'bg-neutral-300 text-neutral-900 ring-2 ring-neutral-200/50'
                  : 'bg-neutral-800 text-neutral-200 border border-none hover:bg-neutral-800 hover:border-neutral-200/30',
              ]"
            >
              Get a Quote
              <font-awesome-icon
                icon="fa-solid fa-chevron-right"
                class="ml-auto"
              />
            </button>
            <button
              @click="setFormType('project')"
              :class="[
                'w-full group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg',
                formData.type === 'project'
                  ? 'bg-neutral-300 text-neutral-900 ring-2 ring-neutral-200/50'
                  : 'bg-neutral-800 text-neutral-200 border border-none hover:bg-neutral-800 hover:border-neutral-200/30',
              ]"
            >
              Start a Project
              <font-awesome-icon
                icon="fa-solid fa-chevron-right"
                class="ml-auto"
              />
            </button>
            <a
              href="mailto:edmarktuazon03@gmail.com"
              target="_blank"
              class="inline-flex items-center gap-2 text-sm text-neutral-200 underline"
            >
              Or email me directly
            </a>
          </div>

          <form @submit.prevent="submitForm">
            <div class="grid gap-3">
              <input
                v-model="formData.honeypot"
                type="text"
                tabindex="-1"
                autocomplete="off"
                class="absolute left-0 top-0 w-0 h-0 opacity-0 pointer-events-none"
                aria-hidden="true"
              />

              <div>
                <label class="block text-sm text-neutral-200 mb-2">Name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-5 py-4 bg-neutral-800 border border-none rounded-xl text-neutral-400 placeholder-neutral-200 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all duration-300"
                  placeholder="John Doe"
                  :disabled="isSubmitting"
                />
              </div>

              <div>
                <label class="block text-sm text-neutral-200 mb-2">Email</label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-5 py-4 bg-neutral-800 border border-none rounded-xl text-neutral-400 placeholder-neutral-200 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all duration-300"
                  placeholder="johndoe@example.com"
                  :disabled="isSubmitting"
                />
              </div>

              <div>
                <label class="block text-sm text-neutral-200 mb-2"
                  >Message</label
                >
                <textarea
                  v-model="formData.message"
                  required
                  rows="8"
                  class="w-full px-5 py-4 bg-neutral-800 border border-none rounded-xl text-neutral-400 placeholder-neutral-200 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all duration-300 resize-none"
                  placeholder="Project Details (timeline, budget, goals, etc.)"
                  :disabled="isSubmitting"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-neutral-300 text-neutral-900 font-bold rounded-xl hover:shadow-xl transition-all duration-300 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span v-if="isSubmitting" class="flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                      fill="none"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </span>
                <span v-else>
                  {{
                    formData.type === "quote" ? "Request Quote" : "Send Message"
                  }}
                </span>
              </button>

              <p class="text-sm text-center text-neutral-200 leading-relaxed">
                <font-awesome-icon icon="fa-solid fa-shield-halved" />
                Your information is <strong>100% safe</strong>. I never sell,
                share, or spam.
                <router-link to="/privacy-policy" class="underline">
                  Privacy Policy
                </router-link>

                <transition name="fade">
                  <div
                    v-if="submitMessage"
                    :class="[
                      'text-center text-sm font-medium px-6 py-3 rounded-xl shadow-md border transition-all duration-300',
                      submitMessage.includes('successfully')
                        ? 'text-emerald-400 bg-emerald-900/20 border-emerald-700/50 shadow-lg'
                        : 'text-red-400 bg-red-900/20 border-red-700/50',
                    ]"
                  >
                    {{ submitMessage }}
                  </div>
                </transition>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
