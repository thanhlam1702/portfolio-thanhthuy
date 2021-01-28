<template>
  <div class="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      visibleCursor: true,
    }
  },
}
</script>
