<template>
  <section class="intro-contain">
    <div class="container">
      <div class="intro">
        <div class="intro__left">
          <div class="intro__left-title">Hello!</div>
          <client-only>
            <VueTyper
              class="intro__left-name"
              :text="[
                `I'm Thanh Thuy`,
                `I'm MC`,
                `I'm Bachelor Business of Administration`,
                `I'm Content Creator`,
              ]"
              :type-delay="100"
            ></VueTyper>
          </client-only>
          <div class="intro__left-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias
            veritatis animi sunt fugit consequuntur a odit qui, nostrum
            explicabo, velit voluptatem eaque tempora provident, quidem
            aspernatur suscipit in ipsum.
          </div>
          <div class="intro__left-about">
            <nuxt-link class="btn-main" to="/about">
              <span>About me</span>
              <IconRightArrow class="icon" />
            </nuxt-link>
          </div>
        </div>
        <div class="intro__right">
          <div class="intro__right-img">
            <img
              src="~/assets/img/avatar-home.jpg"
              alt="Thanh Thúy"
              @mousemove="hoverImg"
              @mouseleave="unHoverImg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    hoverImg(e) {
      const gsap = this.$gsap

      const img = e.target
      if (
        e.x > img.getBoundingClientRect().x &&
        e.x <
          img.getBoundingClientRect().x + img.getBoundingClientRect().width / 2
      ) {
        const valueXLeft =
          (img.getBoundingClientRect().width / 2 -
            (e.x - img.getBoundingClientRect().x)) /
          10

        gsap.to(e.target, {
          rotationY: -1 * valueXLeft,
          duration: 1,
        })
      }

      if (
        e.x >
          img.getBoundingClientRect().x +
            img.getBoundingClientRect().width / 2 &&
        e.x < img.getBoundingClientRect().x + img.getBoundingClientRect().width
      ) {
        const valueXRight =
          (e.x -
            img.getBoundingClientRect().x -
            img.getBoundingClientRect().width / 2) /
          10
        gsap.to(e.target, {
          rotationY: valueXRight,
          duration: 1,
        })
      }

      if (
        e.y > img.getBoundingClientRect().y &&
        e.y <
          img.getBoundingClientRect().y + img.getBoundingClientRect().height / 2
      ) {
        const valueYTop =
          (img.getBoundingClientRect().height / 2 -
            (e.y - img.getBoundingClientRect().y)) /
          10

        gsap.to(e.target, {
          rotationX: valueYTop,
          duration: 1,
        })
      }

      if (
        e.y >
          img.getBoundingClientRect().y +
            img.getBoundingClientRect().height / 2 &&
        e.y < img.getBoundingClientRect().y + img.getBoundingClientRect().height
      ) {
        const valueYBottom =
          (e.y -
            img.getBoundingClientRect().y -
            img.getBoundingClientRect().height / 2) /
          10
        gsap.to(e.target, {
          rotationX: -1 * valueYBottom,
          duration: 1,
        })
      }
    },
    unHoverImg(e) {
      const gsap = this.$gsap
      gsap.to(e.target, {
        rotationX: 0,
        rotationY: 0,
        duration: 1,
      })
    },
  },
}
</script>
