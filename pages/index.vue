<template>
  <div class="main-wrapper home">
    <h1 style="display: none">Thanh Thuy</h1>
    <ShortIntro />
    <JobHome />
  </div>
</template>
<script>
import ShortIntro from '@/components/Intro/ShortIntro'
import JobHome from '@/components/Job/JobHome'
export default {
  components: {
    ShortIntro,
    JobHome,
  },
}
</script>
