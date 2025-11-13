<template>
  <div
    class="bg-neutral-800 py-24 min-h-screen flex items-center justify-center px-4"
  >
    <div
      class="mx-auto px-8 lg:px-14 2xl:px-0 w-full z-50 lg:w-full xl:max-w-[80%] 2xl:max-w-[60%]"
    >
      <div
        class="flex justify-start items-center mb-16 gap-3 relative after:hidden after:w-full after:h-[0.0625rem] after:bg-neutral-600 after:mt-2 md:after:block"
      >
        <h3
          class="text-neutral-200 font-bold text-4xl whitespace-wrap md:whitespace-nowrap"
        >
          Privacy Policy
          <br />
          <span class="text-lg font-normal">Last Update November 13, 2025</span>
        </h3>
      </div>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          1. Who I Am
        </h2>
        <p class="text-neutral-200 leading-relaxed">
          Hi, I’m <strong>Edmark Tuazon</strong>, a freelance web developer from
          the Philippines. This is my personal portfolio site. I care about your
          privacy — that’s why I keep things simple and honest.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          2. What I Collect
        </h2>
        <p class="text-neutral-200 leading-relaxed mb-4">
          When you message me through the contact form, I only ask for:
        </p>
        <ul class="list-disc list-inside text-neutral-200 space-y-2 ml-4">
          <li><strong>Your Name</strong> – so I know who I’m talking to.</li>
          <li><strong>Your Email</strong> – so I can reply.</li>
          <li><strong>Your Message</strong> – so I understand your project.</li>
        </ul>
        <p class="text-neutral-200 leading-relaxed mt-4">
          <strong>I don’t track you. No cookies. No analytics. No ads.</strong>
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          3. How I Use Your Info
        </h2>
        <p class="text-neutral-200 leading-relaxed">
          I use your message <strong>only to reply to you</strong>. That’s it.
        </p>
        <ul class="list-disc list-inside text-neutral-400 space-y-2 mt-4 ml-4">
          <li>I read it.</li>
          <li>I reply via email.</li>
          <li>I might keep it for reference if we work together.</li>
          <li>No newsletters. No spam. No selling.</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          4. Do I Share Your Data?
        </h2>
        <p class="text-neutral-200 leading-relaxed">
          <strong>Nope. Never.</strong>
          Your info stays between you and me.
        </p>
        <p class="text-neutral-200 leading-relaxed mt-4">
          Only exception: if the Philippine government legally requires it
          (which has never happened).
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          5. How I Keep It Safe
        </h2>
        <p class="text-neutral-200 leading-relaxed">
          Your message comes through <strong>secure HTTPS</strong>. I receive it
          in my personal Gmail:
          <a
            href="mailto:edmarktuazon03@gmail.com"
            target="_blank"
            class="underline"
            >edmarktuazon03@gmail.com</a
          >.
        </p>
        <p class="text-neutral-200 leading-relaxed mt-4">
          My email has <strong>2-factor authentication</strong>. I delete old
          messages after <strong>12 months</strong> if there’s no project.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          6. Your Rights
        </h2>
        <p class="text-neutral-200 leading-relaxed">
          Under the <strong>Data Privacy Act of 2012</strong>, you can:
        </p>
        <ul class="list-disc list-inside text-neutral-200 space-y-2 mt-4 ml-4">
          <li>Ask me what I have about you.</li>
          <li>Tell me to delete it.</li>
          <li>Correct any wrong info.</li>
        </ul>
        <p class="text-neutral-200 leading-relaxed mt-4">
          Just email me:
          <a
            href="mailto:edmarktuazon03@gmail.com"
            class="underline hover:text-neutral-100"
            >edmarktuazon03@gmail.com</a
          >
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">7. Kids</h2>
        <p class="text-neutral-200 leading-relaxed">
          This site isn’t for kids under 13. I don’t collect data from children.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">8. Changes</h2>
        <p class="text-neutral-200 leading-relaxed">
          If I change this policy, I’ll update the date above. Big changes? I’ll
          mention it on the site.
        </p>
      </section>

      <section
        class="mb-12 p-6 bg-neutral-800/50 rounded-2xl border border-neutral-700"
      >
        <h2 class="text-2xl font-semibold mb-4 text-neutral-400">
          9. Talk to Me
        </h2>
        <p class="text-neutral-200 leading-relaxed">
          Got questions? Worried? <br />
          I’m just one email away
          <a
            href="mailto:edmarktuazon03@gmail.com"
            class="underline text-neutral-200 leading-relaxed pt-4"
            >edmarktuazon03@gmail.com</a
          >.
        </p>
      </section>

      <div class="text-center text-neutral-500 text-sm mt-16">
        <p>© 2022-2025 Edmark Tuazon</p>
        <p class="mt-2">
          <router-link
            to="/"
            class="inline-block px-6 py-3 bg-neutral-300 text-neutral-900 font-bold rounded-xl hover:shadow-lg transition"
          >
            Back to Home
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
