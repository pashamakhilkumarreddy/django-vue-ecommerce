<script>
import { h } from 'vue';

export default {
  name: 'PageNotFound',
  setup() {
    return () => h('div', {
      class: ['column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen is-6fullhd has-text-centered'],
    },
    <>
      <h2 class='title is-2'>
        PageNotFound
      </h2>
      <router-link to='/' class='button is-link is-light'>
        <span class='icon-text'>
          <span class='icon'>
            <ion-icon name="arrow-back-outline" />
          </span>
          <span>Back to Home</span>
        </span>
      </router-link>
    </>);
  },
};
</script>
<style lang='scss' scoped>
</style>
