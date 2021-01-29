<template>
  <section class="job-contain">
    <div class="container">
      <div class="title">My Case Studies</div>
      <div class="job">
        <div class="job__img">
          <img
            src="~/assets/img/job-1.jpg"
            alt="Thanh Thuy MC"
            @mouseleave="unHoverImg"
            @mousemove="hoverImg"
          />
        </div>
        <div class="job__content">
          <h2 class="job__content-title">Master of Ceremonies</h2>
          <h3 class="job__content-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            possimus delectus ad molestiae illum veniam, eaque aliquam. Ad
            consequatur commodi itaque libero odit. Ullam a perferendis
            architecto. Accusamus, numquam itaque. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Recusandae possimus delectus ad
            molestiae illum veniam, eaque aliquam. Ad consequatur commodi itaque
            libero odit. Ullam a perferendis architecto. Accusamus, numquam
            itaque.
          </h3>
          <nuxt-link class="btn-main" to="/see-more">
            <span>See more!</span>
            <IconRightArrow class="icon" />
          </nuxt-link>
        </div>
      </div>

      <div class="job">
        <div class="job__img">
          <img
            src="~/assets/img/job-2.jpg"
            alt="Thanh Thuy MC"
            @mouseleave="unHoverImg"
            @mousemove="hoverImg"
          />
        </div>
        <div class="job__content">
          <h2 class="job__content-title">
            Bachelor Business of Administration
          </h2>
          <h3 class="job__content-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            possimus delectus ad molestiae illum veniam, eaque aliquam. Ad
            consequatur commodi itaque libero odit. Ullam a perferendis
            architecto. Accusamus, numquam itaque. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Recusandae possimus delectus ad
            molestiae illum veniam, eaque aliquam. Ad consequatur commodi itaque
            libero odit. Ullam a perferendis architecto. Accusamus, numquam
            itaque.
          </h3>
          <nuxt-link class="btn-main" to="/see-more">
            <span>See more!</span>
            <IconRightArrow class="icon" />
          </nuxt-link>
        </div>
      </div>

      <div class="job">
        <div class="job__img">
          <img
            src="~/assets/img/job-3.jpg"
            alt="Thanh Thuy MC"
            @mouseleave="unHoverImg"
            @mousemove="hoverImg"
          />
        </div>
        <div class="job__content">
          <h2 class="job__content-title">Content Creator</h2>
          <h3 class="job__content-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            possimus delectus ad molestiae illum veniam, eaque aliquam. Ad
            consequatur commodi itaque libero odit. Ullam a perferendis
            architecto. Accusamus, numquam itaque. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Recusandae possimus delectus ad
            molestiae illum veniam, eaque aliquam. Ad consequatur commodi itaque
            libero odit. Ullam a perferendis architecto. Accusamus, numquam
            itaque.
          </h3>
          <nuxt-link class="btn-main" to="/see-more">
            <span>See more!</span>
            <IconRightArrow class="icon" />
          </nuxt-link>
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
      const posX = (-e.target.clientWidth + e.offsetX * 6) / 100
      const posY = (-e.target.clientHeight + e.offsetY * 6) / 100
      gsap.to(e.target, {
        duration: 1,
        x: posX,
        y: posY,
        scale: 1.1,
      })
    },
    unHoverImg(e) {
      const gsap = this.$gsap
      gsap.to(e.target, {
        duration: 1,
        x: 0,
        y: 0,
        scale: 1,
      })
    },
  },
}
</script>
