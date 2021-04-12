<template>
  <div class='column is-full-mobile is-full-tablet is-8-desktop is-6-widescreen is-6-fullhd'
  >
    <div class='card' v-if='product'>
      <div class='card-image'>
        <figure class='image is-4by3'>
          <img :src='product.get_image' :alt='product.name' loading='lazy' decoding='async' />
        </figure>
      </div>
      <div class='card-content'>
        <div class='media'>
          <div class='media-left'>
            <figure class='image is-64x64'>
              <img :src='product.get_thumbnail' :alt='product.name' loading='lazy'
                decoding='async' />
            </figure>
          </div>
          <div class='media-content'>
            <p class='title is-4'>{{product.name}}</p>
            <p class='subtitle is-6'>$ {{product.price}}</p>
          </div>
        </div>
        <div class='content'>
          <time
            :datetime='product.date_added'>{{new Date(product.date_added).toDateString()}}</time>
        </div>
      </div>
      <footer class='card-footer' @click='goToProduct(product.get_absolute_url)'>
        <span class='card-footer-item'>View Details</span>
      </footer>
    </div>
    <Loader v-if='isLoading' />
  </div>
</template>
<script>
import ProductService from '@/services/ProductService';
import Loader from '@/components/common/Loader.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'ProductDetails',
  components: {
    Loader,
  },
  setup() {
    const product = ref({});
    const isLoading = ref(false);
    const fetchProductDetails = async () => {
      try {
        isLoading.value = true;
        const [,, categoryId, productId] = window.location.pathname.split('/');
        const result = await ProductService.getProductDetails({
          categoryId,
          productId,
        });
        if (result && result.data) {
          return result.data;
        }
        throw new Error('Error fetching product details');
      } catch (err) {
        console.error(err);
        throw Error(err);
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(async () => {
      product.value = await fetchProductDetails();
    });
    return { product, isLoading };
  },
};
</script>
