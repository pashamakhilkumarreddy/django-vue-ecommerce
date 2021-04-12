<script>
import { h } from 'vue';

export default {
  setup() {
    return () => h('div', {
      id: 'loader',
      class: ['mt-6'],
    }, <div></div>);
  },
};
</script>
<style lang='scss' scoped>
@import url('../../assets/styles/loader.scss');
</style>
