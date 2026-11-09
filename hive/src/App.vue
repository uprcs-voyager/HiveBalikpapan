<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Layout/Navbar.vue'
import Footer from './components/Layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-100 font-sans">
    <!-- Navbar -->
    <Navbar />

    <!-- Berganti sesuai routes -->
    <main class="grow">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
