<template>
  <div class="main-wrapper error">
    <div class="error__contain">
      <img src="~/assets/img/error-page.gif" alt="error page thanh thuy" />
    </div>
    <div class="error__btn">
      <nuxt-link class="btn-main" to="/">
        <span>Back to home</span>
        <IconRightArrow class="icon" />
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="less">
.main-wrapper.error {
  background: #fbb82e;
  .error__contain {
    height: 600px;
    img {
      object-fit: contain;
    }
  }
  .error__btn {
    .btn-main {
      background: #fff;
      margin: auto;
    }
  }
}

//responsive
@media (max-width: 768px) {
  .main-wrapper.error {
    .error__contain {
      height: 300px;
    }
  }
}
</style>
