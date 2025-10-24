import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export function useMotionScrollAnim() {
  const targetEl_headings = ref();
  const targetEl_ul = ref();
  const portfolios = ref();

  useMotion(targetEl_headings, {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 700 } },
    variants: { custom: { scale: 2 } },
  });

  useMotion(targetEl_ul, {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 900 } },
    variants: { custom: { scale: 2 } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 900 } },
  });
  useMotion(portfolios, {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 900 } },
    variants: { custom: { scale: 2 } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 900 } },
  });

  return {
    targetEl_headings,
    targetEl_ul,
    portfolios,
  };
}
