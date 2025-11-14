<template>
  <div v-if="$route.path === '/'">
    <NavigationSection />
    <HeroSection />
    <PortfolioSection />
    <WorkExperienceSection />
    <ContactSection />
    <FooterSection />
  </div>

  <router-view v-else />
</template>

<script setup>
import NavigationSection from "@/components/NavigationSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import WorkExperienceSection from "@/components/WorkExperienceSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>
