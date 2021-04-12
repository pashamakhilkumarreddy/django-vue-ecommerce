<template>
  <div class='column is-12-mobile is-full has-text-centered'>
    <h2 class='title is-1'>Products</h2>
  </div>
  <div class='column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-3-fullhd'
  v-for='(product, i) of products' :key='i'>
    <Product :product='product' />
  </div>
  <div class='column is-12-mobile is-full has-text-centered mt-6' v-if='!products.length'>
    <Loader />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Product from '@/components/Product.vue';
import Loader from '@/components/common/Loader.vue';
import ProductService from '@/services/ProductService';

export default {
  name: 'Home',
  components: {
    Product,
    Loader,
  },
  setup() {
    const products = ref([]);

    async function listProducts() {
      try {
        const result = await ProductService.listProducts();
        if (result && result.data) {
          return result.data;
        }
        throw new Error('Error fetching products');
      } catch (err) {
        console.error(err);
        throw Error(err);
      }
    }

    onMounted(async () => {
      products.value = await listProducts();
    });

    return { products };
  },

};
</script>
