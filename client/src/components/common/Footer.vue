<script>
import { h } from 'vue';

export default {
  setup() {
    return () => h('footer',
      {
        class: ['footer'],
      },
        <div class='has-text-centered'>
          <p class='title is-3'>
            Vue Django Ecommerce
          </p>
        </div>);
  },
};
</script>
<style lang='scss' scoped>
@import url('../../assets/styles/footer.scss');
</style>
