import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Edmark Tuazon | Web Developer",
        metaTags: [
          {
            name: "description",
            content: "Using modern frontend technologies...",
          },
          { name: "keywords", content: "Edmark Tuazon, Frontend Developer..." },
          { name: "author", content: "Edmark Tuazon" },
          { name: "robots", content: "index, follow" },
          { property: "og:type", content: "website" },
          { property: "og:url", content: "https://deved.onrender.com/" },
          {
            property: "og:title",
            content: "Edmark Tuazon - Frontend Web Developer",
          },
          {
            property: "og:description",
            content: "Using modern frontend technologies...",
          },
          { property: "og:locale", content: "en_PH" },
          { property: "og:site_name", content: "Edmark Tuazon Portfolio" },
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
        title: "Edmark Tuazon | Privacy Policy",
        metaTags: [
          {
            name: "description",
            content: "Privacy Policy for Edmark Tuazon's portfolio website.",
          },
          {
            name: "keywords",
            content: "privacy policy, data protection, Edmark Tuazon",
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
            content: "Privacy Policy for Edmark Tuazon's portfolio website.",
          },
          { property: "og:locale", content: "en_PH" },
          { property: "og:site_name", content: "Edmark Tuazon Portfolio" },
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
    if (tagConfig.content) tag.setlAttribute("content", tagConfig.content);
    document.head.appendChild(tag);
  });
});

export default router;
