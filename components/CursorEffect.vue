<template>
  <div class="cursor"></div>
</template>

<script>
export default {
  mounted() {
    const _this = this
    const cursor = document.querySelector('.cursor')
    window.addEventListener('mousemove', function (e) {
      _this.$gsap.to('.cursor', {
        x: e.pageX - cursor.clientWidth / 2,
        y: e.pageY - cursor.clientWidth / 2,
        duration: 0.2,
      })
    })
  },
}
</script>
<style lang="less" scoped>
.cursor {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  z-index: 999;
  pointer-events: none;
}
</style>
