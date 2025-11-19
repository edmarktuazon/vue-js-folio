import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Edmark Tuazon | Frontend Web Developer",
        metaTags: [
          {
            name: "description",
            content:
              "Edmark Tuazon - Frontend Web Developer specializing in Vue.js, Tailwind CSS, and modern web technologies. Experienced in building dynamic, responsive websites and full-stack solutions using Node.js, Express.js, PHP, and MySQL.",
          },
          {
            name: "keywords",
            content:
              "Edmark Tuazon, Frontend Developer, Vue.js Developer, Tailwind CSS, Bootstrap, JavaScript Developer, Web Developer Philippines, Full-stack Developer, Node.js, Express.js, PHP Developer",
          },
          { name: "author", content: "Edmark Tuazon" },
          { name: "robots", content: "index, follow" },

          { property: "og:type", content: "website" },
          { property: "og:url", content: "https://deved.onrender.com/" },
          {
            property: "og:title",
            content:
              "Edmark Tuazon - Frontend Web Developer | Vue.js & Tailwind CSS",
          },
          {
            property: "og:description",
            content:
              "Frontend Web Developer skilled in Vue.js, Tailwind CSS, Bootstrap, Node.js, Express.js, PHP & MySQL. Creating fast, responsive, and modern web experiences.",
          },
          {
            property: "og:image",
            content: "https://deved.onrender.com/developedbyed.png",
          },
          { property: "og:locale", content: "en_PH" },
          { property: "og:site_name", content: "Edmark Tuazon Portfolio" },

          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:title",
            content: "Edmark Tuazon | Frontend Web Developer",
          },
          {
            name: "twitter:description",
            content:
              "Vue.js • Tailwind CSS • Node.js • Express • PHP • MySQL | Building modern, responsive web applications.",
          },
          {
            name: "twitter:image",
            content: "https://deved.onrender.com/og-image.jpg",
          },

          {
            tag: "link",
            rel: "canonical",
            href: "https://deved.onrender.com/",
          },
        ],
      },
    },
    {
      path: "/privacy-policy",
      name: "privacy",
      component: () => import("../views/PrivacyPolicyView.vue"),
      meta: {
        title: "Edmark Tuazon | Privacy Policy ",
        metaTags: [
          {
            name: "description",
            content:
              "Privacy Policy of Edmark Tuazon's personal portfolio website. Learn how your data is handled and protected.",
          },
          {
            name: "keywords",
            content:
              "privacy policy, Edmark Tuazon, data protection, personal website privacy",
          },
          { name: "author", content: "Edmark Tuazon" },
          { name: "robots", content: "index, follow" },

          { property: "og:type", content: "website" },
          {
            property: "og:url",
            content: "https://deved.onrender.com/privacy-policy",
          },
          { property: "og:title", content: "Privacy Policy | Edmark Tuazon" },
          {
            property: "og:description",
            content:
              "Privacy Policy of Edmark Tuazon's personal portfolio website.",
          },
          { property: "og:locale", content: "en_PH" },
          { property: "og:site_name", content: "Edmark Tuazon Portfolio" },

          // Twitter
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: "Privacy Policy | Edmark Tuazon" },

          {
            tag: "link",
            rel: "canonical",
            href: "https://deved.onrender.com/privacy-policy",
          },
        ],
      },
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Edmark Tuazon";

  const selectors = 'meta[name], meta[property], link[rel="canonical"]';
  document.querySelectorAll(selectors).forEach((tag) => tag.remove());

  const metaTags = to.meta.metaTags || [];
  metaTags.forEach((tagConfig) => {
    const tag = document.createElement(tagConfig.tag || "meta");

    Object.keys(tagConfig).forEach((key) => {
      if (key !== "tag" && key !== "content") {
        tag.setAttribute(key, tagConfig[key]);
      }
    });

    if (tagConfig.content) {
      tag.setAttribute("content", tagConfig.content);
    }

    document.head.appendChild(tag);
  });
});

export default router;
