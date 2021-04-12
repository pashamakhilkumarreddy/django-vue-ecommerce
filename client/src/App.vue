<template>
  <page-header />
  <main class='container my-6' v-bind='$attrs'>
    <div class="columns is-mobile is-centered is-vcentered is-multiline">
      <router-view />
    </div>
  </main>
  <page-footer />
</template>
<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    PageFooter: Footer,
    PageHeader: Header,
  },
};
</script>
<style lang='scss'>
@import url('./assets/styles/index.scss');
</style>
