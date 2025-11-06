import { useMotion } from "@vueuse/motion";
import { ref, onMounted, onUnmounted } from "vue";

export function useMotionScrollAnim() {
  const targetElHeroContent = ref();
  const targetElAboutContent = ref();
  const targetElPortfolios = ref();
  const targetElWorkExperience = ref();
  let lastScrollY = ref(0);
  let isScrollingDown = ref(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    isScrollingDown.value = currentScrollY > lastScrollY.value;
    lastScrollY.value = currentScrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  useMotion(targetElHeroContent, {
    initial: { opacity: 0, y: 40 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 700 },
      apply: () => isScrollingDown.value,
    },
  });

  useMotion(targetElAboutContent, {
    initial: { opacity: 0, y: 40 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 900 },
      apply: () => isScrollingDown.value,
    },
  });

  useMotion(targetElPortfolios, {
    initial: { opacity: 0, y: 40 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 900 },
      apply: () => isScrollingDown.value,
    },
  });
  useMotion(targetElWorkExperience, {
    initial: { opacity: 0, y: 40 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 900 },
      apply: () => isScrollingDown.value,
    },
  });

  return {
    targetElHeroContent,
    targetElAboutContent,
    targetElPortfolios,
    targetElWorkExperience,
  };
}
