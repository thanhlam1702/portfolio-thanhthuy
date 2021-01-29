<template>
  <div class="app">
    <!-- <CursorEffect /> -->
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// import CursorEffect from '@/components/CursorEffect'

export default {
  components: {
    Header,
    Footer,
    // CursorEffect,
  },
}
</script>
