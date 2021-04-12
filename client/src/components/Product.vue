<template>
  <div class='card is-clickable'>
    <div class='card-content'>
      <div class='media'>
        <div class='media-left'>
          <figure class='image is-64x64'>
            <img :src='product.get_thumbnail' :alt='product.name' loading='lazy' decoding='async' />
          </figure>
        </div>
        <div class='media-content'>
          <p class='title is-4'>{{product.name}}</p>
          <p class='subtitle is-6'>$ {{product.price}}</p>
        </div>
      </div>
      <div class='content'>
        <time :datetime='product.date_added'>{{new Date(product.date_added).toDateString()}}</time>
      </div>
    </div>
    <footer class='card-footer' @click='goToProduct(product.get_absolute_url)'>
      <span class='card-footer-item'>View Details</span>
    </footer>
  </div>
</template>
<script>
import router from '@/router';

export default {
  name: 'Product',
  props: {
    product: Object,
  },
  setup() {
    function goToProduct(absoluteURL) {
      try {
        const [, categoryId, productId] = absoluteURL.split('/');
        router.push({
          name: 'ProductDetails',
          params: {
            categoryId,
            productId,
          },
        });
      } catch (err) {
        console.error(err);
      }
    }
    return { goToProduct };
  },
};
</script>
