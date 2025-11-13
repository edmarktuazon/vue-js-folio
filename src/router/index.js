// src/router/index.js
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
            content:
              "Using modern frontend technologies and hands-on skills, I have experience developing dynamic, responsive websites. For efficient UI development, I use frameworks like Tailwind CSS and Bootstrap, and I manage version control with Git and GitHub. Furthermore, I have managed domain registration and web hosting services with GoDaddy, Namecheap, and Hostinger, providing smooth website performance and deployment.",
          },
          {
            name: "keywords",
            content:
              "Edmark Tuazon, Frontend Developer, Vue.js Developer, Tailwind CSS, PHP, Freelance Web Developer, Manila, Responsive Web Design, CMS Websites, Web Application Development, UI/UX Development, Modern Frontend Technologies, Website Deployment",
          },
          { name: "author", content: "Edmark Tuazon" },
          { name: "robots", content: "index, follow" },
          { property: "og:type", content: "website" },
          { property: "og:url", content: "https://edmarktuazon.com/" },
          {
            property: "og:title",
            content: "Edmark Tuazon - Frontend Web Developer",
          },
          {
            property: "og:description",
            content:
              "Using modern frontend technologies and hands-on skills, I have experience developing dynamic, responsive websites. For efficient UI development, I use frameworks like Tailwind CSS and Bootstrap, and I manage version control with Git and GitHub. Furthermore, I have managed domain registration and web hosting services with GoDaddy, Namecheap, and Hostinger, providing smooth website performance and deployment.",
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
            content: "https://edmarktuazon.com/privacy-policy",
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
  document.title = to.meta.title || "Edmark Tuazon | Web Developer";

  const metaTags = to.meta.metaTags || [];
  metaTags.forEach((tag) => {
    const element = document.createElement(tag.tag || "meta");
    Object.keys(tag).forEach((key) => {
      if (key !== "tag" && key !== "content") {
        element.setAttribute(key, tag[key]);
      }
    });
    if (tag.content) element.setAttribute("content", tag.content);
    document.head.appendChild(element);
  });
});

export default router;
