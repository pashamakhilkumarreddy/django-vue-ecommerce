import Api from './Api';

export default {
  listProducts() {
    return Api().get('latest-products');
  },
  getProductDetails({ categoryId, productId }) {
    return Api().get(`product/${categoryId}/${productId}`);
  },
};
