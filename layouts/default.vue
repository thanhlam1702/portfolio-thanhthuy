<template>
  <div class="app">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
export default {
  components: { Header },
  data() {
    return {
      visibleCursor: true,
    }
  },
}
</script>
