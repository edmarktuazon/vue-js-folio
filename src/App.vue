<script setup>
import NavigationSection from "./components/NavigationSection.vue";
import TheAboutSection from "./components/AboutSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import WorkExperienceSection from "./components/WorkExperienceSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <NavigationSection />
  <RouterView />
  <TheAboutSection />
  <PortfolioSection />
  <WorkExperienceSection />
  <ContactSection />
  <FooterSection />
</template>
