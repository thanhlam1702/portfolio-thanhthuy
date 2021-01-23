<template>
  <div class="main-wrapper">
    <h1 ref="test" class="test">Works!</h1>
    <div class="box"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const _this = this

    window.onscroll = function () {
      console.log(window.pageYOffset)
      if (window.pageYOffset > document.querySelector('.box').offsetTop - 400) {
        _this.$gsap.fromTo(
          '.box',
          {
            x: 0,
            opacity: 0,
            duration: 2,
          },
          {
            x: 200,
            duration: 2,
            opacity: 1,
          }
        )
      }
    }
    window.addEventListener('click', function (e) {
      _this.$gsap.from('.box', {
        y: 400,
        duration: 2,
        opacity: 0,
      })
    })
  },
}
</script>

<style lang="less">
.box {
  height: 40px;
  width: 40px;
  margin-top: 500px;
  background: aquamarine;
  opacity: 0;
}
</style>
