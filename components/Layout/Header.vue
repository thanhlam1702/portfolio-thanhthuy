<template>
  <header>
    <div class="container-fluid">
      <div class="logo">
        <nuxt-link to="/"> Thanh Thuy </nuxt-link>
      </div>
      <ul class="menu" :class="{ active: isVisible }">
        <li class="menu__item" @click="check">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="menu__item" @click="check">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
      <div
        class="btn-menu"
        :class="{ clicked: isVisible }"
        @click="btnMenuClick"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    btnMenuClick() {
      this.isVisible = !this.isVisible
      if (this.isVisible) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    check() {
      if (this.isVisible) {
        this.isVisible = false
        document.body.style.overflow = ''
      }
    },
  },
}
</script>
