<!-- src/App.vue -->
<template>
  <!-- Default (Home) - all components -->
  <div v-if="$route.path === '/'">
    <NavigationSection />
    <HeroSection />
    <TheAboutSection />
    <PortfolioSection />
    <WorkExperienceSection />
    <ContactSection />
    <FooterSection />
  </div>

  <!-- Other routes (like Privacy) -->
  <router-view v-else />
</template>

<script setup>
import NavigationSection from "@/components/NavigationSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import TheAboutSection from "@/components/AboutSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import WorkExperienceSection from "@/components/WorkExperienceSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>
