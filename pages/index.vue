<template>
  <div class="container">
      <app-header/>
      <div class='background'>
        <login-box/>
      </div>
      <app-footer/>
  </div>
</template>

<script>
import Title from '~/components/Title.vue';
import LoginBox from '~/components/LoginBox.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    'app-header': Title,
    'login-box': LoginBox,
    'app-footer': Footer
  }
}
</script>

<style>
.background {
  margin: 0;
  margin-top: 0;
  height: calc(100vh - 91px);
  width: 100%;
  background: #eeeeef;
}

.container {
  margin: 0 0;
  min-height: 100vh;
  width: 100%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
