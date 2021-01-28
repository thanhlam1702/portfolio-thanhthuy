<template>
  <section class="intro-contain">
    <div class="container">
      <div class="intro">
        <div class="intro__left">
          <div class="intro__left-title">Hello!</div>
          <client-only>
            <VueTyper
              class="intro__left-name"
              :text="[`I'm Thanh Thuy`, `I'm MC`]"
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
            <img src="~/assets/img/avatar-home.jpg" alt="Thanh Thúy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
