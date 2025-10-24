<script setup>
import TheAboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
import NavigationSection from "./components/NavigationSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
</script>

<template>
  <NavigationSection />
  <RouterView />
  <TheAboutSection />
  <PortfolioSection />
  <!-- <FeedbacksSection /> -->
  <ContactSection />
  <FooterSection />
</template>
